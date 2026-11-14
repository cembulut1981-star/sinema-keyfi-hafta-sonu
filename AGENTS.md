<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- News and review items can opt into a lower homepage placement; propagate it into articles and render them once after the second standard feed row, outside the lead and paginated pools, to preserve deliberate editorial placement.
- Article images must be site-hosted (lovable-assets pointers in src/assets, remote copies in src/assets/remote); never hotlink publisher CDNs — avoids copyright/broken-image risk.
- New article slugs are English; keep existing Turkish slugs and route prefixes so published URLs keep working.
- Article route heads use articleHead() from src/lib/seo.ts (canonical, og, Article JSON-LD); dates come only from the source credit, never invented.
- Public editorial reads share one explicit column projection aligned with anonymous grants; never select all columns, because private draft fields must remain inaccessible without breaking public pages.
- Bluesky publishing uses a server-only credential helper with uploaded site-hosted covers in external link cards and UTF-8 link facets; shared text helpers stay browser-safe for isolated protocol tests.
- Daily news discovery and URL acceptance use the same source-domain configuration, so adding a publisher cannot leave its articles excluded by the acceptance filter.
- Mobile editorial layouts keep lead stories full-width and compact stories in paired grids, with wrapping navigation; this preserves the magazine identity without shrinking desktop text or hiding categories.
- Explicit homepage lead and next-row editorial choices are assembled in a browser-safe, tested helper before automated news rows; this preserves requested order without duplicating stories or dropping incomplete groups.
- A separately configured top full-width feature renders before the homepage lead rows and is excluded from their fallback and paginated pools, so prominent editorial stories appear once.
- List-specific image captions, ranking heading treatments and film heading visibility are scoped by slug in the shared list renderer; this keeps editorial treatments from changing other lists.
- Comments are open only on posts allowlisted in public.comment_threads and mirrored in COMMENTED_POST_SLUGS (src/lib/comments.ts); writes go through server functions with plain-UUID user IDs and owner-only delete, so a new post needs both the database row and the slug entry — this keeps comment surfaces explicit instead of opening every page.
- Homepage cards show an "Eklendi" line driven by an addedAt (YYYY-MM-DD) field on the data item; when a post is added give it addedAt and keep the marked set to the ten newest — this keeps freshness signals real instead of invented.
- News can declare a separate YouTube trailer ID and title rendered by YouTubeTrailer below the cover; this preserves site-hosted imagery and article-specific player labels without navigating away.
- Article narration is produced on the server: the public narration route reads the article data, strips formatting, chunks the text and streams speech to the browser player; only items flagged narrated expose it, so enabling narration on a new post needs the flag and nothing else.
