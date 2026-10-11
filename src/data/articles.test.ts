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