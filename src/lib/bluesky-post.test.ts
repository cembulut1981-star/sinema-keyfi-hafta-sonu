import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { buildShareText, coverUrl, linkFacets } from "./bluesky-post";

describe("Bluesky article sharing", () => {
  test("makes the direct article URL clickable after Turkish text and emoji", () => {
    const url = "https://sine-meta.com/haber/carrie-season-2-confirmed-prime-video";
    const text = `Türkçe 🎬 paylaşım\n${url}`;
    const [facet] = linkFacets(text);
    assert.ok(facet);
    assert.equal(facet.features[0]?.uri, url);
    const bytes = new TextEncoder().encode(text);
    assert.equal(new TextDecoder().decode(bytes.slice(facet.index.byteStart, facet.index.byteEnd)), url);
    assert.equal(facet.index.byteStart, 25);
  });
  test("uses the actual site-hosted article cover", () => {
    assert.equal(coverUrl("/__l5e/assets-v1/cover/carrie.jpg"), "https://sine-meta.com/__l5e/assets-v1/cover/carrie.jpg");
    assert.throws(() => coverUrl("https://publisher.example/photo.jpg"));
  });
  test("keeps the full clickable tracked article link within the post limit", () => {
    const url = "https://sine-meta.com/haber/carrie-season-2-confirmed-prime-video?utm_source=bluesky&utm_medium=social&utm_campaign=filmsky_launch";
    const text = buildShareText("Carrie ikinci sezon ".repeat(20), "Türkçe özet ".repeat(100), url);
    assert.ok(Array.from(text).length <= 290);
    assert.ok(text.endsWith(url));
    assert.equal(linkFacets(text)[0]?.features[0]?.uri, url);
  });
});