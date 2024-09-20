/**
 * Extracts the domain name from a URL.
 * 
 * @param url - The URL to extract the domain from.
 * @returns The domain name.
 */
export function extractDomain(url: string): string {
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/);
    return match ? match[1] : '';
}

// Example usage:
// extractDomain("https://www.example.com/path"); // "example.com"