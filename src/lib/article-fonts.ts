import { articleProse, articleProseSerif } from "./prose";

/**
 * Articles whose body copy uses the editorial serif treatment
 * (Source Serif 4, one step larger than the default Roboto body).
 *
 * Browser-safe: no server or database imports, so every article route and the
 * tests can share this one list.
 */
export const SERIF_BODY_SLUGS: readonly string[] = [
  "blade-runner-2099-ridley-scott-series-vision",
  "flags-of-our-fathers-free-pluto-tv",
  "longlegs-netflix-december-2026",
  "best-open-endings-film-history",
  "patrick-stewart-best-roles",
];

export function hasSerifBody(slug: string | undefined): boolean {
  return typeof slug === "string" && SERIF_BODY_SLUGS.includes(slug);
}

/** Picks the body typography for an article page. */
export function articleProseFor(slug: string | undefined): string {
  return hasSerifBody(slug) ? articleProseSerif : articleProse;
}
