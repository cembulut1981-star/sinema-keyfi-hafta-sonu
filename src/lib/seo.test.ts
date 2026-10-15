import { describe, test } from "node:test";
import assert from "node:assert/strict";

import { absoluteImage, extractDate } from "./seo";

describe("seo helpers", () => {
  test("reads the publish date from a source credit", () => {
    assert.equal(extractDate("PC Gamer — Andrea Shearon, updated October 8, 2026"), "2026-10-08");
  });
  test("returns no date when the credit has none", () => {
    assert.equal(extractDate("Rolling Stone"), null);
  });
  test("makes site-hosted images absolute on the public domain", () => {
    assert.equal(absoluteImage("/__l5e/assets-v1/x/a.jpg"), "https://sine-meta.com/__l5e/assets-v1/x/a.jpg");
  });
});
