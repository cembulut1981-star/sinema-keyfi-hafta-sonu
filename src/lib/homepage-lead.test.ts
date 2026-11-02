import { test } from "node:test";
import assert from "node:assert/strict";
import { homepageLeadRows } from "./homepage-lead";
import type { Article } from "@/data/articles";

const article = (id: number, slug = `story-${id}`): Article => ({
  id, reviewSlug: slug, category: "incelemeler", title: slug, excerpt: "", image: "",
});
const castlevania = article(1, "castlevania-belmonts-curse-kotaku-review");
const metallica = article(2, "metallica-life-burns-faster-sphere-review");
const nocturne = article(7, "nocturne-apple-tv-stephen-graham-review");
const incoming = Array.from({ length: 12 }, (_, i) => article(20 + i));
const sides = [article(3), article(4), article(5), article(6)];

test("requested Castlevania review is the first row's lead even with new automated news", () => {
  const { rows } = homepageLeadRows(castlevania, metallica, nocturne, sides, incoming, []);
  assert.equal(rows[0].center.reviewSlug, "castlevania-belmonts-curse-kotaku-review");
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
  assert.equal(incoming.filter((item) => !usedIds.has(item.id)).length, 3);
});
