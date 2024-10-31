import { getRandomIntInRange } from '../../mathFunctions/getRandomIntInRange';

describe('getRandomIntInRange', () => {
    // Test case 1: Random integer within a positive range
    it('1. should return a random integer within a positive range', () => {
        const min: number = 1;
        const max: number = 10;
        const result: number = getRandomIntInRange(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    // Test case 2: Random integer within a negative range
    it('2. should return a random integer within a negative range', () => {
        const min: number = -10;
        const max: number = -1;
        const result: number = getRandomIntInRange(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    // Test case 3: Random integer within a range that includes zero
    it('3. should return a random integer within a range that includes zero', () => {
        const min: number = -5;
        const max: number = 5;
        const result: number = getRandomIntInRange(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    // Test case 4: Random integer where min and max are the same
    it('4. should return the same integer when min and max are the same', () => {
        const min: number = 5;
        const max: number = 5;
        const result: number = getRandomIntInRange(min, max);
        expect(result).toBe(min);
    });

    // Test case 5: Random integer where min is greater than max
    it('5. should throw an error when min is greater than max', () => {
        const min: number = 10;
        const max: number = 1;
        expect(() => getRandomIntInRange(min, max)).toThrow();
    });
});
