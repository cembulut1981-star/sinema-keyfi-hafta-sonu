import { describe, expect, it } from "bun:test";

import { absoluteImage, extractDate } from "./seo";

describe("seo helpers", () => {
  it("reads the publish date from a source credit", () => {
    expect(extractDate("PC Gamer — Andrea Shearon, updated October 8, 2026")).toBe("2026-10-08");
  });
  it("returns no date when the credit has none", () => {
    expect(extractDate("Rolling Stone")).toBeNull();
  });
  it("makes site-hosted images absolute on the public domain", () => {
    expect(absoluteImage("/__l5e/assets-v1/x/a.jpg")).toBe("https://sine-meta.com/__l5e/assets-v1/x/a.jpg");
  });
});
