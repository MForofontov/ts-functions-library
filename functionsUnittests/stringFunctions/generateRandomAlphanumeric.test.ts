import { generateRandomAlphanumeric } from '../../stringFunctions/generateRandomAlphanumeric';

/**
 * Unit tests for the generateRandomAlphanumeric function.
 */
describe('generateRandomAlphanumeric', () => {
    // Test case 1: Generate a random alphanumeric string of length 10
    it('1. should generate a random alphanumeric string of length 10', () => {
        const length: number = 10;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 2: Generate a random alphanumeric string of length 0
    it('2. should generate an empty string for length 0', () => {
        const length: number = 0;
        const expected: string = "";
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toBe(expected);
    });

    // Test case 3: Generate a random alphanumeric string of length 1
    it('3. should generate a random alphanumeric string of length 1', () => {
        const length: number = 1;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]$/);
    });

    // Test case 4: Generate a random alphanumeric string of length 100
    it('4. should generate a random alphanumeric string of length 100', () => {
        const length: number = 100;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 5: Generate a random alphanumeric string of length 50
    it('5. should generate a random alphanumeric string of length 50', () => {
        const length: number = 50;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 6: Generate a random alphanumeric string of length 5
    it('6. should generate a random alphanumeric string of length 5', () => {
        const length: number = 5;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 7: Generate a random alphanumeric string of length 20
    it('7. should generate a random alphanumeric string of length 20', () => {
        const length: number = 20;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 8: Generate a random alphanumeric string of length 15
    it('8. should generate a random alphanumeric string of length 15', () => {
        const length: number = 15;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 9: Generate a random alphanumeric string of length 30
    it('9. should generate a random alphanumeric string of length 30', () => {
        const length: number = 30;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });

    // Test case 10: Generate a random alphanumeric string of length 25
    it('10. should generate a random alphanumeric string of length 25', () => {
        const length: number = 25;
        const result: string = generateRandomAlphanumeric(length);
        expect(result).toHaveLength(length);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
    });
});
