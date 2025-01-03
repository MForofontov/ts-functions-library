import { generateRandomString } from '../../stringFunctions/generateRandomString';

/**
 * Unit tests for the generateRandomString function.
 */
describe('generateRandomString', () => {
    // Test case 1: Generate a random string of length 10 with default characters
    it('1. should generate a random string of length 10 with default characters', () => {
        const length: number = 10;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 2: Generate a random string of length 0 with default characters
    it('2. should generate an empty string for length 0 with default characters', () => {
        const length: number = 0;
        const expected: string = "";
        const result: string = generateRandomString(length);
        expect(result).toBe(expected);
    });

    // Test case 3: Generate a random string of length 1 with default characters
    it('3. should generate a random string of length 1 with default characters', () => {
        const length: number = 1;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]$/);
    });

    // Test case 4: Generate a random string of length 100 with default characters
    it('4. should generate a random string of length 100 with default characters', () => {
        const length: number = 100;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 5: Generate a random string of length 50 with default characters
    it('5. should generate a random string of length 50 with default characters', () => {
        const length: number = 50;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 6: Generate a random string of length 5 with default characters
    it('6. should generate a random string of length 5 with default characters', () => {
        const length: number = 5;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 7: Generate a random string of length 20 with default characters
    it('7. should generate a random string of length 20 with default characters', () => {
        const length: number = 20;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 8: Generate a random string of length 15 with default characters
    it('8. should generate a random string of length 15 with default characters', () => {
        const length: number = 15;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 9: Generate a random string of length 30 with default characters
    it('9. should generate a random string of length 30 with default characters', () => {
        const length: number = 30;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 10: Generate a random string of length 25 with default characters
    it('10. should generate a random string of length 25 with default characters', () => {
        const length: number = 25;
        const result: string = generateRandomString(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 11: Generate a random string of length 10 with custom characters
    it('11. should generate a random string of length 10 with custom characters', () => {
        const length: number = 10;
        const chars: string = 'abcdef';
        const result: string = generateRandomString(length, chars);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[abcdef]+$/);
    });

    // Test case 12: Generate a random string of length 5 with custom characters
    it('12. should generate a random string of length 5 with custom characters', () => {
        const length: number = 5;
        const chars: string = '12345';
        const result: string = generateRandomString(length, chars);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[12345]+$/);
    });

    // Test case 13: Generate a random string of length 20 with custom characters
    it('13. should generate a random string of length 20 with custom characters', () => {
        const length: number = 20;
        const chars: string = 'xyz';
        const result: string = generateRandomString(length, chars);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[xyz]+$/);
    });
});
