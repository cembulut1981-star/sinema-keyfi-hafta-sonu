import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { ARTICLES, GAME_ARTICLES, type Article } from "./articles";
import { formatDate } from "@/lib/seo";
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

describe("werewolf film ratings", () => {
  const body = LISTS.find((item) => item.slug === "best-werewolf-movies")?.body ?? "";
  const films = [
    ["Wolf (1994)", 6.3, 61],
    ["Brotherhood of the Wolf (2001)", 7.0, 74],
    ["The Curse of the Werewolf (1961)", 6.5, 60],
    ["Werewolves Within (2021)", 6.0, 86],
    ["Ginger Snaps (2000)", 6.8, 92],
    ["Dog Soldiers (2002)", 6.8, 83],
    ["The Wolf Man (1941)", 7.2, 91],
    ["The Howling (1981)", 6.5, 76],
    ["The Company of Wolves (1984)", 6.6, 84],
    ["An American Werewolf in London (1981)", 7.5, 80],
  ] as const;
  for (const [title, imdb, tomatoes] of films) {
    test(`${title} has both verified rating values`, () => {
      const section = body.split("\n## ").find((part) => part.split("\n")[0].endsWith(title));
      assert.ok(section, `missing film: ${title}`);
      assert.equal(Number(section.match(/\[(\d+\.\d+)\/10\]\(https:\/\/www\.imdb\.com\//)?.[1]), imdb);
      assert.equal(Number(section.match(/\[%(\d+)\]\(https:\/\/www\.rottentomatoes\.com\//)?.[1]), tomatoes);
    });
  }
});

describe("Castlevania coverage placement", () => {
  test("the new Kotaku review appears once in PC Games and remains available for the lead", () => {
    const matching = GAME_ARTICLES.filter((article) => article.reviewSlug === "castlevania-belmonts-curse-kotaku-review");
    assert.equal(matching.length, 1);
    assert.equal(matching[0].homepagePlacement, undefined);
  });
  test("belongs to PC Games", () => {
    assert.equal(GAME_ARTICLES.some((article) => article.newsSlug === "castlevania-belmonts-curse-review-highlights"), true);
  });

  test("appears lower on the homepage instead of the lead pool", () => {
    const article = ARTICLES.find((item) => item.newsSlug === "castlevania-belmonts-curse-review-highlights");
    assert.equal(article?.homepagePlacement, "lower");
  });
});

describe("Ghost of Yōtei Complete Edition coverage", () => {
  const slug = "ghost-of-yotei-complete-edition-review";
  test("appears once in PC Games", () => {
    assert.equal(GAME_ARTICLES.filter((article) => article.reviewSlug === slug).length, 1);
  });
  test("stays below the homepage lead pool", () => {
    assert.equal(ARTICLES.find((article) => article.reviewSlug === slug)?.homepagePlacement, "lower");
  });
});

describe("Mortal Shell 2 coverage placement", () => {
  const slug = "mortal-shell-2-rps-review";
  test("appears once in PC Games", () => {
    assert.equal(GAME_ARTICLES.filter((article) => article.reviewSlug === slug).length, 1);
  });
  test("stays below the homepage lead pool", () => {
    assert.equal(ARTICLES.find((article) => article.reviewSlug === slug)?.homepagePlacement, "lower");
  });
  test("credits the source review and its publication date without inventing one", () => {
    const review = REVIEWS.find((item) => item.slug === slug);
    assert.equal(review?.source, "Rock Paper Shotgun — August 17, 2026 — https://www.rockpapershotgun.com/mortal-shell-2-review-a-monumental-heavy-metal-sequel-with-the-spirit-of-a-90s-pc-game");
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

describe("Nocturne coverage placement", () => {
  const slug = "nocturne-apple-tv-stephen-graham-review";
  const review = REVIEWS.find((item) => item.slug === slug);

  test("appears once on the site and is not filed under PC Games", () => {
    assert.equal(ARTICLES.filter((article) => article.reviewSlug === slug).length, 1);
    assert.equal(GAME_ARTICLES.some((article) => article.reviewSlug === slug), false);
  });

  test("stays in the upper homepage pool instead of the lower placement", () => {
    assert.equal(ARTICLES.find((article) => article.reviewSlug === slug)?.homepagePlacement, undefined);
  });

  test("credits the source review and its publication date without inventing one", () => {
    assert.equal(review?.source, "The Times — October 30, 2026 — https://www.thetimes.com/culture/tv-radio/article/nocturne-review-stephen-graham-apple-tv-rq2cxlp3q");
    assert.equal(review?.rating, "★★★★☆");
  });

  test("keeps the two anchor paragraphs the inline photos are attached to", () => {
    const paragraphs = (review?.body ?? "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    assert.equal(paragraphs.filter((p) => p.includes("Rory Culkin")).length, 1);
    assert.equal(paragraphs.filter((p) => p.includes("Zazie Beetz")).length, 1);
  });

  test("body carries the reviewed cast and setting details", () => {
    const body = review?.body ?? "";
    for (const fact of ["Jurek Walter", "Rory Culkin", "Liev Schreiber", "Zazie Beetz", "Fairhaven", "Lars Kepler"]) {
      assert.ok(body.includes(fact), `missing ${fact}`);
    }
  });
});

describe("Crystal Lake coverage placement", () => {
  test("the new review appears once and is available for the upper homepage row", () => {
    const matches = ARTICLES.filter((item) => item.reviewSlug === "crystal-lake-indiewire-review");
    assert.equal(matches.length, 1);
    assert.equal(matches[0].homepagePlacement, undefined);
    assert.equal(GAME_ARTICLES.some((item) => item.reviewSlug === "crystal-lake-indiewire-review"), false);
  });

  test("the review cover differs from the news story cover it was paired with", () => {
    const review = REVIEWS.find((item) => item.slug === "crystal-lake-indiewire-review");
    const news = NEWS.find((item) => item.slug === "crystal-lake-13-killer-things-friday-the-13th-series");
    assert.ok(review && news);
    assert.notEqual(review.image, news.image);
  });

  test("each captioned inline photo has exactly one anchor paragraph", () => {
    const review = REVIEWS.find((item) => item.slug === "crystal-lake-indiewire-review");
    const paragraphs = (review?.body ?? "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    for (const anchor of ["Callum Vinson", "Dondurulmuş karelerle", "gelecekteki şiddetin işaretleri", "sondan bir önceki bölümünde"]) {
      assert.equal(paragraphs.filter((p) => p.includes(anchor)).length, 1, `anchor not unique: ${anchor}`);
    }
  });
});

describe("added dates on the ten newest homepage cards", () => {
  const EXPECTED: Record<string, string> = {
    "rings-of-power-season-3-empire-review": "2026-11-12",
    "stranger-things-other-worlds-prequel-2028-teaser": "2026-11-09",
    "karoshi-trailer-teo-yoo-samurai-corporate-thriller": "2026-11-07",
    "raise-the-red-lantern-gong-li-review": "2026-11-07",
    "adam-driver-hunt-for-ben-solo-over": "2026-11-06",
    "best-thriller-movies-since-1990-ranked": "2026-11-04",
    "battlestar-galactica-board-game-new-edition-2027": "2026-11-04",
    "crystal-lake-indiewire-review": "2026-11-03",
    "oscars-2027-nominations-predictions": "2026-11-02",
    "best-star-wars-games-ever-ranked": "2026-11-13",
  };
  const slugOf = (a: Article) =>
    a.newsSlug ?? a.reviewSlug ?? a.listSlug ?? a.musicSlug ?? a.seriesSlug ?? "";

  test("exactly the ten newest posts carry an added date", () => {
    const marked = ARTICLES.filter((a) => a.addedAt).map(slugOf).sort();
    assert.deepEqual(marked, Object.keys(EXPECTED).sort());
  });

  test("each added date matches the day the post went in", () => {
    for (const [slug, date] of Object.entries(EXPECTED)) {
      assert.equal(ARTICLES.find((a) => slugOf(a) === slug)?.addedAt, date, slug);
    }
  });

  test("the date renders with a Turkish month name", () => {
    assert.equal(formatDate("2026-11-07"), "7 Kasım 2026");
  });
});

describe("Karōshi news", () => {
  const slug = "karoshi-trailer-teo-yoo-samurai-corporate-thriller";
  test("keeps the verified source date distinct from the added date", () => {
    const news = NEWS.find((item) => item.slug === slug);
    assert.equal(news?.source, "Empire — November 5, 2026");
    assert.equal(news?.addedAt, "2026-11-07");
  });
  test("uses the verified Lionsgate YouTube trailer", () => {
    assert.equal(NEWS.find((item) => item.slug === slug)?.youtubeTrailerId, "jQHoAsDcjVU");
  });
});

describe("Other Worlds news", () => {
  const slug = "stranger-things-other-worlds-prequel-2028-teaser";
  test("uses the Netflix announcement teaser embedded in the source", () => {
    assert.equal(NEWS.find((item) => item.slug === slug)?.youtubeTrailerId, "qb8jZ5zNMrs");
  });
  test("keeps the source date separate from the site addition date", () => {
    const news = NEWS.find((item) => item.slug === slug);
    assert.equal(news?.source, "Empire — November 6, 2026");
    assert.equal(news?.addedAt, "2026-11-09");
  });
  test("appears once in the non-game upper homepage pool", () => {
    assert.equal(ARTICLES.filter((item) => item.newsSlug === slug).length, 1);
    assert.equal(ARTICLES.find((item) => item.newsSlug === slug)?.homepagePlacement, undefined);
    assert.equal(GAME_ARTICLES.some((item) => item.newsSlug === slug), false);
  });
});
