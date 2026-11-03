import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { COMMENTED_POST_SLUGS, commentBodySchema, type Comment } from './comments';

// Only the ten newest posts are open for comments; the database also refuses
// any slug that has no open thread row.
const openPostSlug = z
  .string()
  .min(1)
  .max(200)
  .refine((slug) => (COMMENTED_POST_SLUGS as readonly string[]).includes(slug), 'Bu yazıya yorum kapalı.');

export const postComment = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ slug: openPostSlug, body: commentBodySchema }))
  .handler(async ({ data, context }) => {
    const { data: me, error } = await context.supabase.auth.getUser();
    if (error || !me.user) throw new Error('Oturum doğrulanamadı');
    const meta = (me.user.user_metadata ?? {}) as Record<string, unknown>;
    const fallback = (me.user.email ?? 'okur').split('@')[0] || 'okur';
    const displayName = String(meta.name ?? meta.full_name ?? meta.display_name ?? '').trim().slice(0, 100) || fallback;
    const avatarUrl = String(meta.picture ?? meta.avatar_url ?? '').trim().slice(0, 500);
    const inserted = await context.supabase
      .from('comments')
      .insert({
        post_slug: data.slug,
        user_id: context.userId,
        display_name: displayName,
        avatar_url: avatarUrl,
        body: data.body,
      })
      .select('*')
      .single();
    if (inserted.error) throw new Error('Yorum kaydedilemedi');
    return inserted.data as Comment;
  });

export const deleteComment = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ id: z.number().int().positive() }))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from('comments')
      .delete()
      .eq('id', data.id)
      .eq('user_id', context.userId);
    if (error) throw new Error('Yorum silinemedi');
    return { success: true as const };
  });
