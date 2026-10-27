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
