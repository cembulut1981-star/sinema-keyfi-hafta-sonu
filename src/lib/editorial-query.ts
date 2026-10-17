import { queryOptions } from '@tanstack/react-query';
import { publishedPosts } from './editorial-public.functions';
export const publishedPostsQuery = queryOptions({ queryKey: ['published-editorial-posts'], queryFn: () => publishedPosts(), staleTime: 0 });