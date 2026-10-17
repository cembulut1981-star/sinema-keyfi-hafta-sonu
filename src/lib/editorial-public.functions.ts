import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

export const publishedPosts = createServerFn({ method: 'GET' }).handler(async () => {
  const { listPublishedPosts } = await import('./editorial-public.server');
  return listPublishedPosts();
});
export const publishedPost = createServerFn({ method: 'GET' })
  .inputValidator(z.object({ slug: z.string().min(1).max(150) }))
  .handler(async ({ data }) => {
    const { findPublishedPost } = await import('./editorial-public.server');
    return findPublishedPost(data.slug);
  });