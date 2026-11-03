import { z } from 'zod';

// The ten newest Sine-Meta posts, newest first. Comments are open on these only.
// A newer post joins the list here and in public.comment_threads.
export const COMMENTED_POST_SLUGS = [
  'hunger-games-companion-album-to-feature-jennifer-7f53c993',
  'gog-explains-how-one-of-the-most-important-pc-games-22a8b5e9',
  'crystal-lake-indiewire-review',
  'nocturne-apple-tv-stephen-graham-review',
  'mortal-shell-2-rps-review',
  'oscars-2027-nominations-predictions',
  'best-werewolf-movies',
  'best-sci-fi-movies-of-2026',
  'ghost-of-yotei-complete-edition-review',
  'carrie-season-2-confirmed-prime-video',
] as const;

export const COMMENT_BODY_MIN = 2;
export const COMMENT_BODY_MAX = 2000;
export const COMMENT_PAGE_SIZE = 50;

export type Comment = {
  id: number;
  post_slug: string;
  user_id: string;
  display_name: string;
  avatar_url: string;
  body: string;
  created_at: string;
};

export const commentBodySchema = z
  .string()
  .trim()
  .min(COMMENT_BODY_MIN, 'Yorum en az iki karakter olmalı.')
  .max(COMMENT_BODY_MAX, 'Yorum 2000 karakteri geçemez.');

export function isCommentedPost(slug: string) {
  return (COMMENTED_POST_SLUGS as readonly string[]).includes(slug);
}

// Turkish short forms used under each comment.
export function relativeTime(iso: string, now: Date = new Date()) {
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return '';
  const seconds = Math.max(0, Math.round((now.getTime() - then) / 1000));
  if (seconds < 60) return 'az önce';
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} dk önce`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} sa önce`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days} gün önce`;
  return new Date(then).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
}
