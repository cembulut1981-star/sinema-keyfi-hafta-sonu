// Server-only helper for publishing posts to the connected Bluesky account.
// Credentials come from project secrets: BLUESKY_HANDLE and BLUESKY_APP_PASSWORD.

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
    const body = await res.text();
    console.error(`Bluesky login failed [${res.status}]: ${body}`);
    throw new Error(`Bluesky login failed [${res.status}]`);
  }

  const data = (await res.json()) as { accessJwt?: string; handle?: string };
  if (!data.accessJwt || !data.handle) {
    throw new Error("Bluesky login returned no session");
  }
  return { accessJwt: data.accessJwt, handle: data.handle };
}

export async function postToBluesky(text: string): Promise<{ uri: string }> {
  const session = await createSession();

  const res = await fetch(`${PDS}/xrpc/com.atproto.repo.createRecord`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessJwt}`,
    },
    body: JSON.stringify({
      repo: session.handle,
      collection: "app.bsky.feed.post",
      record: { text, createdAt: new Date().toISOString() },
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
