import { z } from 'zod';
import type { Article } from '@/data/articles';
import type { Database } from '@/integrations/supabase/types';
import type { PublicEditorialPost } from './editorial-public-fields';

export type EditorialPost = Database['public']['Tables']['editorial_posts']['Row'];
export const editorPostSchema = z.object({
  id: z.number().int().positive(), title: z.string().trim().min(5).max(180),
  excerpt: z.string().trim().min(10).max(500), body: z.string().trim().min(100).max(30000),
  category: z.enum(['haberler', 'diziler', 'muzik']), is_game: z.boolean(),
  image: z.string().max(300), image_rights_confirmed: z.boolean(),
});
export const generationSchema = z.object({
  title: z.string(), excerpt: z.string(), body: z.string(),
  category: z.enum(['haberler', 'diziler', 'muzik']), is_game: z.boolean(),
});
export function canPublish(post: Pick<EditorialPost, 'status' | 'image' | 'image_rights_confirmed' | 'title' | 'body'>) {
  return post.status === 'draft' && post.image.startsWith('posts/') && post.image_rights_confirmed && post.title.length >= 5 && post.body.length >= 100;
}
export function publicPost(post: PublicEditorialPost) {
  return post.status === 'published' && Boolean(post.approved_at && post.approved_by && post.published_at);
}
export function toEditorialCard(post: PublicEditorialPost): Article {
  return {
    id: 1000000 + post.id, title: post.title, excerpt: post.excerpt,
    image: `/api/public/editorial-media/${post.id}`,
    category: post.category as Article['category'], newsSlug: post.slug,
    ...(post.is_game ? { homepagePlacement: 'lower' as const } : {}),
  };
}
export function englishSlug(title: string) {
  return title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 100);
}
export function providerPause(status: number, type = '') {
  if (status === 402 || (status === 403 && ['credit_limit_reached', 'ai_disabled'].includes(type))) return 'credits';
  if (status === 403) return 'denied';
  if (status === 429) return 'rate';
  return 'error';
}