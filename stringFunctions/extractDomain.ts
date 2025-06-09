/**
 * Extracts the domain name from a URL.
 *
 * @param url - The URL to extract the domain from.
 * @returns The domain name.
 */
export function extractDomain(url: string): string {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return '';
  }
}
