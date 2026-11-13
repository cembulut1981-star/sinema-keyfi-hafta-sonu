import { describe, test } from "node:test";
import assert from "node:assert/strict";

import { LISTS } from "@/data/lists";
import { NEWS } from "@/data/news";
import { REVIEWS } from "@/data/reviews";
import {
  COMMENTED_POST_SLUGS,
  commentBodySchema,
  isCommentedPost,
  relativeTime,
} from "./comments";

describe("commented posts", () => {
  test("exactly the ten newest posts are open for comments", () => {
    assert.equal(COMMENTED_POST_SLUGS.length, 10);
    assert.equal(new Set(COMMENTED_POST_SLUGS).size, 10);
  });

  test("every static slug in the open list really exists on the site", () => {
    const staticSlugs = COMMENTED_POST_SLUGS.filter(
      (slug) => !slug.endsWith("-7f53c993") && !slug.endsWith("-22a8b5e9"),
    );
    assert.equal(staticSlugs.length, 8);
    for (const slug of staticSlugs) {
      const found =
        NEWS.filter((item) => item.slug === slug).length +
        REVIEWS.filter((item) => item.slug === slug).length +
        LISTS.filter((item) => item.slug === slug).length;
      assert.equal(found, 1, `expected one article for ${slug}`);
    }
  });

  test("the two daily-news posts are the ones published from the database", () => {
    for (const slug of [
      "hunger-games-companion-album-to-feature-jennifer-7f53c993",
      "gog-explains-how-one-of-the-most-important-pc-games-22a8b5e9",
    ]) {
      assert.equal(isCommentedPost(slug), true);
      assert.equal(NEWS.some((item) => item.slug === slug), false);
    }
  });

  test("older posts stay closed to comments", () => {
    assert.equal(isCommentedPost("stranger-things-other-worlds-prequel-2028-teaser"), true);
    assert.equal(isCommentedPost("mortal-shell-2-rps-review"), false);
    assert.equal(isCommentedPost("karoshi-trailer-teo-yoo-samurai-corporate-thriller"), true);
    assert.equal(isCommentedPost("raise-the-red-lantern-gong-li-review"), true);
    assert.equal(isCommentedPost("adam-driver-hunt-for-ben-solo-over"), true);
    assert.equal(isCommentedPost("best-thriller-movies-since-1990-ranked"), true);
    assert.equal(isCommentedPost("best-star-wars-games-ever-ranked"), true);
    assert.equal(isCommentedPost("crystal-lake-indiewire-review"), false);
    assert.equal(isCommentedPost("best-werewolf-movies"), false);
    assert.equal(isCommentedPost("best-sci-fi-movies-of-2026"), false);
    assert.equal(isCommentedPost("ghost-of-yotei-complete-edition-review"), false);
    assert.equal(isCommentedPost("oscars-2027-nominations-predictions"), false);
    assert.equal(isCommentedPost("ridley-scott-movies-ranked-worst-to-best"), false);
    assert.equal(isCommentedPost(""), false);
  });
});

describe("comment body validation", () => {
  test("rejects a one-character comment", () => {
    assert.equal(commentBodySchema.safeParse("a").success, false);
  });

  test("rejects a comment longer than the stored limit", () => {
    assert.equal(commentBodySchema.safeParse("x".repeat(2001)).success, false);
  });

  test("accepts a normal comment and trims surrounding space", () => {
    const parsed = commentBodySchema.safeParse("  Fragmanı çok beğendim.  ");
    assert.equal(parsed.success, true);
    assert.equal(parsed.success && parsed.data, "Fragmanı çok beğendim.");
  });
});

describe("comment timestamps", () => {
  const now = new Date("2026-11-03T20:00:00Z");

  test("shows 'az önce' under a minute", () => {
    assert.equal(relativeTime("2026-11-03T19:59:30Z", now), "az önce");
  });

  test("shows minutes, hours and days in Turkish", () => {
    assert.equal(relativeTime("2026-11-03T19:55:00Z", now), "5 dk önce");
    assert.equal(relativeTime("2026-11-03T17:00:00Z", now), "3 sa önce");
    assert.equal(relativeTime("2026-11-01T20:00:00Z", now), "2 gün önce");
  });

  test("falls back to a full date after a week", () => {
    assert.equal(relativeTime("2026-10-20T20:00:00Z", now), "20 Ekim 2026");
  });
});
