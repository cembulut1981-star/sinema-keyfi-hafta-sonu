CREATE TABLE public.bluesky_shares (
  slug text PRIMARY KEY,
  category text,
  uri text,
  posted_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.bluesky_shares TO service_role;
GRANT SELECT ON public.bluesky_shares TO authenticated;

ALTER TABLE public.bluesky_shares ENABLE ROW LEVEL SECURITY;