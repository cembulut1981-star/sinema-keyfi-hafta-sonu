import { describe, test } from "node:test";
import assert from "node:assert/strict";

import { isNarrated, narrationChunks, narrationText, stripMarkdown } from "./narration";

describe("stripMarkdown", () => {
  test("photo links and formatting marks disappear, link text stays", () => {
    const spoken = stripMarkdown("## Başlık\n\n**Kalın** ve [bağlantı](https://example.com)\n\n![foto](${asset})");
    assert.equal(spoken, "Başlık\n\nKalın ve bağlantı");
  });
});

describe("narrationText", () => {
  test("title and excerpt come before the body", () => {
    const spoken = narrationText({
      title: "Başlık",
      excerpt: "Özet cümlesi.",
      body: "Gövde **cümlesi**.",
    } as never);
    assert.equal(spoken, "Başlık\n\nÖzet cümlesi.\n\nGövde cümlesi.");
  });
});

describe("narrationChunks", () => {
  const SLUG = "rings-of-power-season-3-empire-review";

  test("the narrated article splits into several bounded parts", () => {
    const chunks = narrationChunks(SLUG);
    assert.ok(chunks, "seslendirme açık olmalı");
    assert.ok(chunks.length >= 2, "en az iki bölüm beklenir");
    for (const chunk of chunks) {
      assert.ok(Array.from(chunk).length <= 1200, "bölüm karakter sınırını aşmamalı");
      assert.ok(!chunk.includes("**"), "kalın işareti kalmamalı");
      assert.ok(!chunk.includes("!("), "fotoğraflar seslendirmemeli");
    }
    assert.ok(chunks.join(" ").includes("Gandalf"), "yazının özeti okunmalı");
  });

  test("articles without narration are refused", () => {
    assert.equal(isNarrated("rings-of-power-season-3-empire-review"), true);
    assert.equal(narrationChunks("yok-boyle-bir-yazi"), null);
  });

  test("the ten newest posts across news, reviews and lists are narrated", () => {
    const narrated = [
      "rings-of-power-season-3-empire-review",
      "stranger-things-other-worlds-prequel-2028-teaser",
      "karoshi-trailer-teo-yoo-samurai-corporate-thriller",
      "raise-the-red-lantern-gong-li-review",
      "adam-driver-hunt-for-ben-solo-over",
      "battlestar-galactica-board-game-new-edition-2027",
      "oscars-2027-nominations-predictions",
      "crystal-lake-indiewire-review",
      "nocturne-apple-tv-stephen-graham-review",
      "best-thriller-movies-since-1990-ranked",
    ];
    for (const slug of narrated) {
      assert.equal(isNarrated(slug), true, slug);
      const chunks = narrationChunks(slug);
      assert.ok(chunks && chunks.length >= 1, `${slug} bölümlere ayrılabilmeli`);
    }
  });
});
