export const BLUESKY_SITE = "https://sine-meta.com";

export type BlueskyPreview = {
  url: string;
  title: string;
  description: string;
  image: string;
};

export function linkFacets(text: string) {
  const encoder = new TextEncoder();
  return Array.from(text.matchAll(/https?:\/\/[^\s]+/g), (match) => ({
    index: {
      byteStart: encoder.encode(text.slice(0, match.index)).length,
      byteEnd: encoder.encode(text.slice(0, match.index) + match[0]).length,
    },
    features: [{ $type: "app.bsky.richtext.facet#link", uri: match[0] }],
  }));
}

export function coverUrl(image: string): string {
  const url = new URL(image, BLUESKY_SITE);
  if (url.origin !== BLUESKY_SITE || url.protocol !== "https:") {
    throw new Error("Bluesky covers must be hosted on the website");
  }
  return url.href;
}

export function buildShareText(title: string, excerpt: string, url: string): string {
  const trim = (value: string, max: number) => {
    const chars = Array.from(value.trim());
    return chars.length <= max ? chars.join("") : `${chars.slice(0, max - 1).join("").trimEnd()}…`;
  };
  const tail = `\n\n#filmsky\n\n${url}`;
  const head = trim(title, Math.min(120, 290 - Array.from(tail).length));
  const room = 290 - Array.from(head + tail).length - 2;
  return `${head}${room > 40 ? `\n\n${trim(excerpt, room)}` : ""}${tail}`;
}