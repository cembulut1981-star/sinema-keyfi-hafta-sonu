import { articleProse, articleProseSerif } from "./prose";

/**
 * Articles whose body copy uses the editorial serif treatment
 * (Source Serif 4, one step larger than the default Roboto body).
 *
 * Browser-safe: no server or database imports, so every article route and the
 * tests can share this one list.
 */
export const SERIF_BODY_SLUGS: readonly string[] = [
  "robert-pattinson-james-bond-casting-analysis",
  "robert-eggers-werwulf-scariest-horror-movie",
  "mike-flanagan-carrie-three-seasons-trilogy-plan",
  "the-body-netflix-coming-of-age-review",
  "rings-of-power-season-3-episode-guide",
];

export function hasSerifBody(slug: string | undefined): boolean {
  return typeof slug === "string" && SERIF_BODY_SLUGS.includes(slug);
}

/** Picks the body typography for an article page. */
export function articleProseFor(slug: string | undefined): string {
  return hasSerifBody(slug) ? articleProseSerif : articleProse;
}
