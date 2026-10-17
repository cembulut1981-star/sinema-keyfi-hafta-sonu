import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

export function publicClient() {
  const url = process.env['SUPABASE_URL'];
  const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
  if (!url || !key) throw new Error('Article service is not configured');
  return createClient<Database>(url, key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (input, init) => {
    const headers = new Headers(init?.headers);
    if (key.startsWith('sb_')) headers.delete('Authorization');
    headers.set('apikey', key);
    return fetch(input, { ...init, headers });
  } } });
}
export async function findPublishedPost(slug: string) {
  const { data, error } = await publicClient().from('editorial_posts').select('*').eq('status', 'published').eq('slug', slug).maybeSingle();
  if (error) throw new Error('Article could not be loaded');
  return data;
}
export async function listPublishedPosts() {
  const { data, error } = await publicClient().from('editorial_posts').select('*').eq('status', 'published').order('published_at', { ascending: false });
  if (error) throw new Error('Articles could not be loaded');
  return data ?? [];
}