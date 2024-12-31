import { extractDomain } from '../../stringFunctions/extractDomain';

/**
 * Unit tests for the extractDomain function.
 */
describe('extractDomain', () => {
    // Test case 1: Extract domain from a full URL with https
    it('1. should extract domain from a full URL with https', () => {
        const url: string = "https://www.example.com/path";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 2: Extract domain from a full URL with http
    it('2. should extract domain from a full URL with http', () => {
        const url: string = "http://www.example.com/path";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 3: Extract domain from a URL without www
    it('3. should extract domain from a URL without www', () => {
        const url: string = "https://example.com/path";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 4: Extract domain from a URL without protocol
    it('4. should extract domain from a URL without protocol', () => {
        const url: string = "www.example.com/path";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 5: Extract domain from a URL without protocol and www
    it('5. should extract domain from a URL without protocol and www', () => {
        const url: string = "example.com/path";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 6: Extract domain from a URL with subdomain
    it('6. should extract domain from a URL with subdomain', () => {
        const url: string = "https://sub.example.com/path";
        const expected: string = "sub.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 7: Extract domain from a URL with port
    it('7. should extract domain from a URL with port', () => {
        const url: string = "https://www.example.com:8080/path";
        const expected: string = "example.com:8080";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 8: Extract domain from a URL with query parameters
    it('8. should extract domain from a URL with query parameters', () => {
        const url: string = "https://www.example.com/path?query=param";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 9: Extract domain from a URL with fragment
    it('9. should extract domain from a URL with fragment', () => {
        const url: string = "https://www.example.com/path#fragment";
        const expected: string = "example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 10: Extract domain from an invalid URL
    it('10. should return an empty string for an invalid URL', () => {
        const url: string = "invalid-url";
        const expected: string = "";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });
});
