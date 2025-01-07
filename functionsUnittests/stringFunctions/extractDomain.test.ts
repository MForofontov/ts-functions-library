import { extractDomain } from '../../stringFunctions/extractDomain';

/**
 * Unit tests for the extractDomain function.
 */
describe('extractDomain', () => {
    // Test case 1: Extract domain from a simple URL
    it('1. should extract domain from a simple URL', () => {
        const url: string = "https://www.example.com";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 2: Extract domain from a URL with a path
    it('2. should extract domain from a URL with a path', () => {
        const url: string = "https://www.example.com/path";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 3: Extract domain from a URL with a query string
    it('3. should extract domain from a URL with a query string', () => {
        const url: string = "https://www.example.com/path?query=123";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 4: Extract domain from a URL with a fragment
    it('4. should extract domain from a URL with a fragment', () => {
        const url: string = "https://www.example.com/path#fragment";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 5: Extract domain from a URL with a port
    it('5. should extract domain from a URL with a port', () => {
        const url: string = "https://www.example.com:8080/path";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 6: Extract domain from a URL with a subdomain
    it('6. should extract domain from a URL with a subdomain', () => {
        const url: string = "https://subdomain.example.com";
        const expected: string = "subdomain.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 7: Extract domain from a URL with an IP address
    it('7. should extract domain from a URL with an IP address', () => {
        const url: string = "https://192.168.1.1/path";
        const expected: string = "192.168.1.1";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 8: Extract domain from a URL with HTTP protocol
    it('8. should extract domain from a URL with HTTP protocol', () => {
        const url: string = "http://www.example.com";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 9: Extract domain from a URL without protocol
    it('9. should return an empty string for a URL without protocol', () => {
        const url: string = "www.example.com";
        const expected: string = "";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 10: Extract domain from an empty string
    it('10. should return an empty string for an empty URL', () => {
        const url: string = "";
        const expected: string = "";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 11: Extract domain from a URL with only protocol
    it('11. should return an empty string for a URL with only protocol', () => {
        const url: string = "https://";
        const expected: string = "";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 12: Extract domain from a URL with mixed case
    it('12. should extract domain from a URL with mixed case', () => {
        const url: string = "https://WwW.ExAmPlE.cOm";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 13: Extract domain from a URL with a long path
    it('13. should extract domain from a URL with a long path', () => {
        const url: string = "https://www.example.com/this/is/a/very/long/path";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 14: Extract domain from a URL with multiple query parameters
    it('14. should extract domain from a URL with multiple query parameters', () => {
        const url: string = "https://www.example.com/path?param1=value1&param2=value2";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });

    // Test case 15: Extract domain from a URL with multiple fragments
    it('15. should extract domain from a URL with multiple fragments', () => {
        const url: string = "https://www.example.com/path#fragment1#fragment2";
        const expected: string = "www.example.com";
        const result: string = extractDomain(url);
        expect(result).toBe(expected);
    });
});
