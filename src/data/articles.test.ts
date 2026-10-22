import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { ARTICLES, GAME_ARTICLES } from "./articles";
import { NEWS } from "./news";
import { REVIEWS } from "./reviews";
import { LISTS } from "./lists";
import { MUSIC } from "./music";
import { SERIES } from "./series";

describe("Bluesky shared article destinations", () => {
  test("Ridley Scott's shared list remains available at its published slug", () => {
    assert.equal(LISTS.filter((item) => item.slug === "ridley-scott-movies-ranked-worst-to-best").length, 1);
  });
});

describe("Castlevania coverage placement", () => {
  test("belongs to PC Games", () => {
    assert.equal(GAME_ARTICLES.some((article) => article.newsSlug === "castlevania-belmonts-curse-review-highlights"), true);
  });

  test("appears lower on the homepage instead of the lead pool", () => {
    const article = ARTICLES.find((item) => item.newsSlug === "castlevania-belmonts-curse-review-highlights");
    assert.equal(article?.homepagePlacement, "lower");
  });
});

describe("2026 PC games guide", () => {
  test("belongs to the PC Games collection", () => {
    assert.equal(GAME_ARTICLES.some((article) => article.newsSlug === "new-pc-games-2026-release-guide"), true);
  });

  test("is assigned to the lower homepage placement, not the lead feed", () => {
    const guide = ARTICLES.find((article) => article.newsSlug === "new-pc-games-2026-release-guide");
    assert.equal(guide?.homepagePlacement, "lower");
  });
});
describe("No Man’s Sky mobile announcement", () => {
  test("belongs to the PC Games collection", () => {
    assert.equal(GAME_ARTICLES.some((article) => article.newsSlug === "no-mans-sky-ios-october-28-launch"), true);
  });

  test("stays lower on the homepage, outside the lead pool", () => {
    const article = ARTICLES.find((item) => item.newsSlug === "no-mans-sky-ios-october-28-launch");
    assert.equal(article?.homepagePlacement, "lower");
  });
});
describe("new 2026 PC games coverage", () => {
  const slugs = ["subnautica-2-two-million-sales-12-hours", "subnautica-2-early-access-impressions", "007-first-light-sales-bond-curse-broken", "resident-evil-requiem-game-review", "crimson-desert-game-review", "007-first-light-game-review"];
  test("all six appear in PC Games", () => {
    for (const s of slugs) assert.equal(GAME_ARTICLES.some((a) => a.newsSlug === s || a.reviewSlug === s), true, s);
  });
});

describe("stories publish without a visible source credit", () => {
  const all = [
    ...NEWS.map((n) => ({ slug: n.slug, body: n.body })),
    ...REVIEWS.map((r) => ({ slug: r.slug, body: r.body })),
    ...LISTS.map((l) => ({ slug: l.slug, body: l.body })),
    ...MUSIC.map((m) => ({ slug: m.slug, body: m.body })),
    ...SERIES.map((s) => ({ slug: s.slug, body: s.body })),
  ];

  test("every story has body text to check", () => {
    assert.ok(all.length > 100, `expected the full archive, got ${all.length}`);
  });

  test("no story text carries a source credit line", () => {
    for (const item of all) {
      const credit = item.body.split("\n").find((line) => /^\s*(Source:|Read the original|Images:)/i.test(line));
      assert.equal(credit, undefined, `${item.slug} still shows: ${credit}`);
    }
  });
});
