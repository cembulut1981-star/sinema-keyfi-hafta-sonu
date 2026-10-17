import type { Database } from '@/integrations/supabase/types';

// Match the anonymous column grant; draft sources and job errors stay private.
export const PUBLIC_EDITORIAL_COLUMNS = 'id,slug,title,excerpt,body,category,is_game,image,source_credit,status,published_at,approved_at,approved_by,created_at,image_rights_confirmed';
export type PublicEditorialPost = Pick<Database['public']['Tables']['editorial_posts']['Row'],
  'id' | 'slug' | 'title' | 'excerpt' | 'body' | 'category' | 'is_game' | 'image' |
  'source_credit' | 'status' | 'published_at' | 'approved_at' | 'approved_by' | 'created_at' | 'image_rights_confirmed'>;