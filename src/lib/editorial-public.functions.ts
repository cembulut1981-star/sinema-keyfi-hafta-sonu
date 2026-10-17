import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import type { Database } from '@/integrations/supabase/types';

export const publishedPosts = createServerFn({ method: 'GET' }).handler(async () => {
  const url = process.env['SUPABASE_URL'];
  const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
  if (!url || !key) throw new Error('Article service is not configured');
  const client = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { fetch: (input, init) => {
      const headers = new Headers(init?.headers);
      if (key.startsWith('sb_')) headers.delete('Authorization');
      headers.set('apikey', key);
      return fetch(input, { ...init, headers });
    } },
  });
  const { data, error } = await client.from('editorial_posts').select('*').eq('status', 'published').order('published_at', { ascending: false });
  if (error) throw new Error('Published articles could not be loaded');
  return data ?? [];
});
export const publishedPost = createServerFn({ method: 'GET' })
  .inputValidator(z.object({ slug: z.string().min(1).max(150) }))
  .handler(async ({ data }) => {
    const { findPublishedPost } = await import('./editorial-public.server');
    return findPublishedPost(data.slug);
  });