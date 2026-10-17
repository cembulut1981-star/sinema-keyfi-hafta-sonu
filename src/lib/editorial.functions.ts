import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';
import { canPublish, editorPostSchema } from './editorial';

export const editorialDesk = createServerFn({ method: 'GET' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (!allowed) return { allowed: false as const, posts: [], job: null, profile: null };
  const [posts, job, profile] = await Promise.all([
    context.supabase.from('editorial_posts').select('*').order('created_at', { ascending: false }).limit(100),
    context.supabase.from('editorial_job').select('*').eq('id', 1).maybeSingle(),
    context.supabase.from('profiles').select('*').eq('id', context.userId).maybeSingle(),
  ]);
  if (posts.error || job.error || profile.error) throw new Error('Editorial desk could not be loaded');
  const visible = await Promise.all((posts.data ?? []).map(async post => {
    const signed = post.image ? await context.supabase.storage.from('editorial-media').createSignedUrl(post.image, 3600) : null;
    return { ...post, preview_image: signed?.data?.signedUrl ?? '' };
  }));
  return { allowed: true as const, posts: visible, job: job.data, profile: profile.data };
});
export const saveEditorialPost = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator(editorPostSchema).handler(async ({ data, context }) => {
    const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
    if (!allowed) throw new Error('Only the editor can change articles');
    if (data.image && !/^posts\/[a-zA-Z0-9/_\-.]+$/.test(data.image)) throw new Error('Upload an image to this site');
    const { id, ...fields } = data;
    const result = await context.supabase.from('editorial_posts').update(fields).eq('id', id).eq('status', 'draft').select('id').single();
    if (result.error) throw new Error('Draft could not be saved');
    return { success: true };
  });
export const decideEditorialPost = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator(z.object({ id: z.number().int().positive(), action: z.enum(['publish', 'reject']) })).handler(async ({ data, context }) => {
    const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
    if (!allowed) throw new Error('Only the editor can approve articles');
    const { data: post } = await context.supabase.from('editorial_posts').select('*').eq('id', data.id).single();
    if (!post || post.status !== 'draft') throw new Error('This article is not awaiting approval');
    if (data.action === 'publish' && !canPublish(post)) throw new Error('Save the article, upload an image and confirm its usage rights before publishing');
    const { error } = await context.supabase.from('editorial_posts').update({ status: data.action === 'publish' ? 'published' : 'rejected' }).eq('id', data.id).eq('status', 'draft');
    if (error) throw new Error('Article decision could not be saved');
    return { success: true, slug: post.slug };
  });
export const generateEditorialDrafts = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (!allowed) throw new Error('Only the editor can prepare articles');
  const apiKey = process.env['LOVABLE_API_KEY'];
  const firecrawlKey = process.env['FIRECRAWL_API_KEY'];
  if (!apiKey || !firecrawlKey) return { success: false, message: 'AI or news search connection is not configured', count: 0 };
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { generateDraftBatch } = await import('./editorial-generation.server');
  return generateDraftBatch(supabaseAdmin, apiKey, firecrawlKey);
});
export const resumeEditorialJob = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const { data: allowed } = await context.supabase.rpc('has_role', { _user_id: context.userId, _role: 'admin' });
  if (!allowed) throw new Error('Only the editor can resume content preparation');
  const { data: job } = await context.supabase.from('editorial_job').select('*').eq('id', 1).maybeSingle();
  if (job?.pause_kind === 'denied') throw new Error('Provider access must be restored before starting a fresh request');
  const { error } = await context.supabase.from('editorial_job').update({ paused: false, message: null, pause_kind: null }).eq('id', 1);
  if (error) throw new Error('Could not resume content preparation');
  return { success: true };
});
export const saveEditorProfile = createServerFn({ method: 'POST' }).middleware([requireSupabaseAuth])
  .inputValidator(z.object({ display_name: z.string().trim().max(100), avatar_url: z.string().max(300) })).handler(async ({ data, context }) => {
    if (data.avatar_url && !/^https:\/\//.test(data.avatar_url)) throw new Error('Use an HTTPS profile image address');
    const { error } = await context.supabase.from('profiles').update(data).eq('id', context.userId);
    if (error) throw new Error('Profile could not be saved');
    return { success: true };
  });