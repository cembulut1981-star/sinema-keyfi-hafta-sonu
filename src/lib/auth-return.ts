export const AUTH_RETURN_KEY = 'sine-meta-auth-return';

// Remembered before an OAuth redirect so the reader lands back on the article
// they were commenting on.
export function rememberReturnPath(path: string) {
  try {
    sessionStorage.setItem(AUTH_RETURN_KEY, path);
  } catch {
    // Storage can be blocked in private mode; the sign-in still works.
  }
}

// Same-origin paths only: a single leading slash, never "//host" or an absolute URL.
export function restoreReturnPath(): string | null {
  let raw: string | null = null;
  try {
    raw = sessionStorage.getItem(AUTH_RETURN_KEY);
    if (raw) sessionStorage.removeItem(AUTH_RETURN_KEY);
  } catch {
    return null;
  }
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return null;
  if (raw === window.location.pathname + window.location.search) return null;
  return raw;
}
