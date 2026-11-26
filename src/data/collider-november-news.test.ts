import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { ARTICLES } from "./articles";
import { HOMEPAGE_TOP_ROW_SLUGS } from "@/lib/homepage-lead";

const slugs = [
  "blade-runner-2099-ridley-scott-series-vision",
  "flags-of-our-fathers-free-pluto-tv",
  "longlegs-netflix-december-2026",
];

describe("three requested Collider news cards", () => {
  for (const slug of slugs) {
    test(`${slug} has one card, a site-hosted cover and today's addition date`, () => {
      const matches = ARTICLES.filter((article) => article.newsSlug === slug);
      assert.equal(matches.length, 1);
      const article = matches[0];
      assert.ok(article);
      assert.equal(article.category, "haberler");
      assert.equal(article.addedAt, "2026-11-26");
      assert.ok(article.image.startsWith("/__l5e/assets-v1/"));
    });
  }
  test("the three cards occupy the first three compact lead slots", () => {
    assert.deepEqual(HOMEPAGE_TOP_ROW_SLUGS.slice(0, 3), slugs);
  });
});