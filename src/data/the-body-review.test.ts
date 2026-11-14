import { test } from "node:test";
import assert from "node:assert/strict";
import { REVIEWS } from "./reviews";
import { NEWS } from "./news";
import { LISTS } from "./lists";
import { ARTICLES } from "./articles";
import { HOMEPAGE_TOP_FEATURE_SLUG, findArticleBySlug } from "@/lib/homepage-lead";
import { isCommentedPost } from "@/lib/comments";
import { isNarrated } from "@/lib/narration";

test("The Body is the explicitly reserved top full-width story", () => {
  assert.equal(HOMEPAGE_TOP_FEATURE_SLUG, "the-body-netflix-coming-of-age-review");
  const card = findArticleBySlug(ARTICLES, HOMEPAGE_TOP_FEATURE_SLUG);
  assert.ok(card);
  assert.equal(card.reviewSlug, "the-body-netflix-coming-of-age-review");
});

test("new review has the real added date and the newest-card date set stays at ten", () => {
  const review = REVIEWS.find((item) => item.slug === HOMEPAGE_TOP_FEATURE_SLUG);
  assert.ok(review);
  assert.equal(review.addedAt, "2026-11-14");
  assert.equal([...REVIEWS, ...NEWS, ...LISTS].filter((item) => item.addedAt).length, 10);
});

test("The Body uses existing narration and newest-post comments", () => {
  assert.equal(isNarrated("the-body-netflix-coming-of-age-review"), true);
  assert.equal(isCommentedPost("the-body-netflix-coming-of-age-review"), true);
});