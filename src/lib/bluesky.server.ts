// Server-only helper for publishing posts to the connected Bluesky account.
// Credentials come from project secrets: BLUESKY_HANDLE and BLUESKY_APP_PASSWORD.
import { coverUrl, linkFacets, type BlueskyPreview } from "./bluesky-post";

const PDS = "https://bsky.social";

type Session = { accessJwt: string; handle: string };

async function createSession(): Promise<Session> {
  const identifier = process.env["BLUESKY_HANDLE"];
  const password = process.env["BLUESKY_APP_PASSWORD"];
  if (!identifier || !password) {
    throw new Error("Bluesky credentials are not configured");
  }

  const res = await fetch(`${PDS}/xrpc/com.atproto.server.createSession`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });

  if (!res.ok) {
    throw new Error(`Bluesky login failed [${res.status}]`);
  }

  const data = (await res.json()) as { accessJwt?: string; handle?: string };
  if (!data.accessJwt || !data.handle) {
    throw new Error("Bluesky login returned no session");
  }
  return { accessJwt: data.accessJwt, handle: data.handle };
}

export async function postToBluesky(
  text: string,
  preview: BlueskyPreview,
  existingUri?: string,
): Promise<{ uri: string }> {
  const session = await createSession();
  const image = await fetch(coverUrl(preview.image));
  if (!image.ok) throw new Error(`Bluesky cover fetch failed [${image.status}]`);
  const mimeType = image.headers.get("content-type")?.split(";")[0];
  if (!mimeType?.startsWith("image/")) throw new Error("Bluesky cover is not an image");
  const bytes = await image.arrayBuffer();
  const upload = await fetch(`${PDS}/xrpc/com.atproto.repo.uploadBlob`, {
    method: "POST",
    headers: { "Content-Type": mimeType, Authorization: `Bearer ${session.accessJwt}` },
    body: bytes,
  });
  if (!upload.ok) throw new Error(`Bluesky cover upload failed [${upload.status}]`);
  const { blob } = (await upload.json()) as { blob?: Record<string, unknown> };
  if (!blob) throw new Error("Bluesky cover upload returned no image");

  let createdAt = new Date().toISOString();
  let rkey: string | undefined;
  let swapRecord: string | undefined;
  if (existingUri) {
    const match = /^at:\/\/([^/]+)\/app\.bsky\.feed\.post\/([^/]+)$/.exec(existingUri);
    if (!match) throw new Error("Invalid Bluesky post address");
    rkey = match[2];
    const query = new URLSearchParams({ repo: session.handle, collection: "app.bsky.feed.post", rkey });
    const previous = await fetch(`${PDS}/xrpc/com.atproto.repo.getRecord?${query}`, {
      headers: { Authorization: `Bearer ${session.accessJwt}` },
    });
    if (!previous.ok) throw new Error(`Bluesky post read failed [${previous.status}]`);
    const data = (await previous.json()) as { cid: string; value: { createdAt: string } };
    createdAt = data.value.createdAt;
    swapRecord = data.cid;
  }

  const res = await fetch(`${PDS}/xrpc/com.atproto.repo.${rkey ? "putRecord" : "createRecord"}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessJwt}`,
    },
    body: JSON.stringify({
      repo: session.handle,
      collection: "app.bsky.feed.post",
      ...(rkey ? { rkey, swapRecord } : {}),
      record: {
        $type: "app.bsky.feed.post",
        text,
        createdAt,
        facets: linkFacets(text),
        embed: {
          $type: "app.bsky.embed.external",
          external: {
            uri: preview.url,
            title: preview.title,
            description: preview.description,
            thumb: blob,
          },
        },
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Bluesky post failed [${res.status}]: ${body}`);
    throw new Error(`Bluesky post failed [${res.status}]`);
  }

  const data = (await res.json()) as { uri?: string };
  if (!data.uri) {
    throw new Error("Bluesky did not return the published post address");
  }
  return { uri: data.uri };
}
