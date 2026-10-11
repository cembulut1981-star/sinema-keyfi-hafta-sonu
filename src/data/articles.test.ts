import { describe, expect, test } from "bun:test";
import { ARTICLES, GAME_ARTICLES } from "./articles";

describe("2026 PC games guide", () => {
  test("belongs to the PC Games collection", () => {
    expect(GAME_ARTICLES.some((article) => article.newsSlug === "new-pc-games-2026-release-guide")).toBe(true);
  });

  test("is assigned to the lower homepage placement, not the lead feed", () => {
    const guide = ARTICLES.find((article) => article.newsSlug === "new-pc-games-2026-release-guide");
    expect(guide?.homepagePlacement).toBe("lower");
  });
});