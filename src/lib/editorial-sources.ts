// Keep discovery and accepted publishers aligned through one source list.
export const EDITORIAL_SOURCE_DOMAINS: readonly string[] = [
  'empireonline.com',
  'variety.com',
  'ew.com',
  'pcgamer.com',
  'rollingstone.com',
  'theguardian.com',
  'kotaku.com',
];

export const EDITORIAL_SEARCH_QUERY = `(${EDITORIAL_SOURCE_DOMAINS.map(domain => `site:${domain}`).join(' OR ')}) (movie OR television OR music OR PC games) news`;

export function isEditorialSource(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && EDITORIAL_SOURCE_DOMAINS.includes(parsed.hostname.replace(/^www\./, ''));
  } catch {
    return false;
  }
}