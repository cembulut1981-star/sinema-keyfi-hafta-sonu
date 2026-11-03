import { test } from "node:test";
import assert from "node:assert/strict";
import { homepageLeadRows, HOMEPAGE_FEATURED_REVIEW_SLUG } from "./homepage-lead";
import { ARTICLES } from "@/data/articles";
import type { Article } from "@/data/articles";

const article = (id: number, slug = `story-${id}`): Article => ({
  id, reviewSlug: slug, category: "incelemeler", title: slug, excerpt: "", image: "",
});
const castlevania = article(1, "castlevania-belmonts-curse-kotaku-review");
const metallica = article(2, "metallica-life-burns-faster-sphere-review");
const nocturne = article(7, "nocturne-apple-tv-stephen-graham-review");
const incoming = Array.from({ length: 12 }, (_, i) => article(20 + i));
const sides = [article(3), article(4), article(5), article(6)];

test("requested Crystal Lake review is the first row's lead even with new automated news", () => {
  const crystalLake = ARTICLES.find((item) => item.reviewSlug === HOMEPAGE_FEATURED_REVIEW_SLUG);
  assert.ok(crystalLake);
  const { rows } = homepageLeadRows(crystalLake, metallica, nocturne, sides, incoming, ARTICLES);
  assert.equal(rows[0].center.reviewSlug, "crystal-lake-indiewire-review");
  assert.equal(rows.flatMap((row) => [row.center, ...row.sides]).filter((item) => item.reviewSlug === "crystal-lake-indiewire-review").length, 1);
});

test("Metallica moves exactly one homepage row down", () => {
  const { rows } = homepageLeadRows(castlevania, metallica, nocturne, sides, incoming, []);
  assert.equal(rows[1].center.reviewSlug, "metallica-life-burns-faster-sphere-review");
});

test("Nocturne takes the third lead row without displacing the first two", () => {
  const { rows } = homepageLeadRows(castlevania, metallica, nocturne, sides, incoming, []);
  assert.equal(rows[2].center.reviewSlug, "nocturne-apple-tv-stephen-graham-review");
  assert.equal(rows[0].center.reviewSlug, "castlevania-belmonts-curse-kotaku-review");
  assert.equal(rows[1].center.reviewSlug, "metallica-life-burns-faster-sphere-review");
});

test("lead rows do not duplicate stories and leave incomplete incoming groups for the feed", () => {
  const { rows, usedIds } = homepageLeadRows(castlevania, metallica, nocturne, sides, incoming, sides);
  const shown = rows.flatMap((row) => [row.center.id, ...row.sides.map((item) => item.id)]);
  assert.equal(new Set(shown).size, shown.length);
  const remaining = incoming.filter((item) => !usedIds.has(item.id));
  // Two lead rows plus the Nocturne row take eight of the twelve incoming
  // stories; the four left over are too few for a full row, so they stay in
  // the feed instead of being shown half-empty.
  assert.equal(remaining.length, 4);
  assert.ok(remaining.length < 5, "an incomplete group must be left for the feed");
});
