import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/api/public/editorial-media/$id')({
  server: { handlers: { GET: async ({ params }) => {
    const id = Number(params.id);
    if (!Number.isSafeInteger(id) || id < 1) return new Response('Not found', { status: 404 });
    const { publicClient } = await import('@/lib/editorial-public.server');
    const { data: post } = await publicClient().from('editorial_posts').select('image').eq('id', id).eq('status', 'published').maybeSingle();
    if (!post?.image) return new Response('Not found', { status: 404 });
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { data, error } = await supabaseAdmin.storage.from('editorial-media').download(post.image);
    if (error || !data) return new Response('Not found', { status: 404 });
    return new Response(data, { headers: { 'Content-Type': data.type || 'image/jpeg', 'Cache-Control': 'public, max-age=60', 'X-Content-Type-Options': 'nosniff' } });
  } } },
});