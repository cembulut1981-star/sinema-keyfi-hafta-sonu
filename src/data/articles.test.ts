import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { ARTICLES, GAME_ARTICLES } from "./articles";

describe("2026 PC games guide", () => {
  test("belongs to the PC Games collection", () => {
    assert.equal(GAME_ARTICLES.some((article) => article.newsSlug === "new-pc-games-2026-release-guide"), true);
  });

  test("is assigned to the lower homepage placement, not the lead feed", () => {
    const guide = ARTICLES.find((article) => article.newsSlug === "new-pc-games-2026-release-guide");
    assert.equal(guide?.homepagePlacement, "lower");
  });
});
describe("new 2026 PC games coverage", () => {
  const slugs = ["subnautica-2-two-million-sales-12-hours", "subnautica-2-early-access-impressions", "007-first-light-sales-bond-curse-broken", "resident-evil-requiem-game-review", "crimson-desert-game-review", "007-first-light-game-review"];
  test("all six appear in PC Games", () => {
    for (const s of slugs) assert.equal(GAME_ARTICLES.some((a) => a.newsSlug === s || a.reviewSlug === s), true, s);
  });
});
