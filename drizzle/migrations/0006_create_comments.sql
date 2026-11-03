CREATE TABLE public.comment_threads (
  post_slug text PRIMARY KEY,
  opened_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.comments (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_slug text NOT NULL REFERENCES public.comment_threads (post_slug) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  display_name text NOT NULL,
  avatar_url text NOT NULL DEFAULT '',
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT comments_body_length CHECK (char_length(body) BETWEEN 2 AND 2000),
  CONSTRAINT comments_display_name_length CHECK (char_length(display_name) BETWEEN 1 AND 100)
);

CREATE INDEX comments_post_created_idx ON public.comments (post_slug, created_at DESC);

INSERT INTO public.comment_threads (post_slug) VALUES
  ('hunger-games-companion-album-to-feature-jennifer-7f53c993'),
  ('gog-explains-how-one-of-the-most-important-pc-games-22a8b5e9'),
  ('crystal-lake-indiewire-review'),
  ('nocturne-apple-tv-stephen-graham-review'),
  ('mortal-shell-2-rps-review'),
  ('oscars-2027-nominations-predictions'),
  ('best-werewolf-movies'),
  ('best-sci-fi-movies-of-2026'),
  ('ghost-of-yotei-complete-edition-review'),
  ('carrie-season-2-confirmed-prime-video');

GRANT SELECT ON public.comment_threads TO anon, authenticated;
GRANT ALL ON public.comment_threads TO service_role;
GRANT SELECT ON public.comments TO anon;
GRANT SELECT, INSERT, DELETE ON public.comments TO authenticated;
GRANT ALL ON public.comments TO service_role;

ALTER TABLE public.comment_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "comment threads readable by all" ON public.comment_threads
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "comments readable by all" ON public.comments
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "members comment as themselves" ON public.comments
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "members delete their own comments" ON public.comments
  FOR DELETE TO authenticated USING (user_id = auth.uid());