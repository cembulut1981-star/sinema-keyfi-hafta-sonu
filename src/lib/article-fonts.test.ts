import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { SERIF_BODY_SLUGS, hasSerifBody, articleProseFor } from "./article-fonts";
import { articleProse, articleProseSerif } from "./prose";
import { ARTICLES, type Article } from "@/data/articles";

const slugOf = (a: Article) =>
  a.newsSlug ?? a.reviewSlug ?? a.listSlug ?? a.musicSlug ?? a.seriesSlug ?? "";

describe("editorial serif bodies on the five newest posts", () => {
  test("the serif list is exactly the five newest posts", () => {
    assert.deepEqual(
      [...SERIF_BODY_SLUGS].sort(),
      [
        "mike-flanagan-carrie-three-seasons-trilogy-plan",
        "rings-of-power-season-3-episode-guide",
        "robert-eggers-werwulf-scariest-horror-movie",
        "robert-pattinson-james-bond-casting-analysis",
        "the-body-netflix-coming-of-age-review",
      ].sort(),
    );
  });

  test("every serif slug is a real published article", () => {
    const slugs = new Set(ARTICLES.map(slugOf));
    for (const slug of SERIF_BODY_SLUGS) {
      assert.ok(slugs.has(slug), `unknown slug in SERIF_BODY_SLUGS: ${slug}`);
    }
  });

  test("serif posts render in the larger serif body", () => {
    const css = articleProseFor("robert-pattinson-james-bond-casting-analysis");
    assert.equal(css, articleProseSerif);
    assert.ok(css.includes("font-serif-body"));
    assert.ok(css.includes("text-[19px]"));
    assert.ok(css.includes("[&_p]:my-7"), "paragraph gap rule must survive");
  });

  test("other posts keep the default sans body", () => {
    const css = articleProseFor("karoshi-trailer-teo-yoo-samurai-corporate-thriller");
    assert.equal(css, articleProse);
    assert.ok(!css.includes("font-serif-body"));
    assert.ok(css.includes("text-[17px]"));
  });

  test("an unknown or missing slug falls back to the default body", () => {
    assert.equal(hasSerifBody(undefined), false);
    assert.equal(articleProseFor(undefined), articleProse);
  });
});
