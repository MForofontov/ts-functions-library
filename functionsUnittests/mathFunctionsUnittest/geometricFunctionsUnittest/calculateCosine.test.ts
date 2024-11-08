import { calculateCosine } from '../../../mathFunctions/geometricFunctions/calculateCosine';

describe('calculateCosine', () => {
    // Test case 1: Cosine of 0 degrees
    it('1. should return 1 for 0 degrees', () => {
        const degrees: number = 0;
        const expected: number = 1;
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 2: Cosine of 90 degrees
    it('2. should return 0 for 90 degrees', () => {
        const degrees: number = 90;
        const expected: number = 0;
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 3: Cosine of 180 degrees
    it('3. should return -1 for 180 degrees', () => {
        const degrees: number = 180;
        const expected: number = -1;
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 4: Cosine of 270 degrees
    it('4. should return 0 for 270 degrees', () => {
        const degrees: number = 270;
        const expected: number = 0;
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 5: Cosine of 360 degrees
    it('5. should return 1 for 360 degrees', () => {
        const degrees: number = 360;
        const expected: number = 1;
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 6: Cosine of a negative angle
    it('6. should return the correct cosine for a negative angle', () => {
        const degrees: number = -60;
        const expected: number = 0.5;
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 7: Cosine of an angle greater than 360 degrees
    it('7. should return the correct cosine for an angle greater than 360 degrees', () => {
        const degrees: number = 450;
        const expected: number = 0.70710678118; // Cosine of 450 degrees is the same as cosine of 90 degrees
        const result: number = calculateCosine(degrees);
        expect(result).toBeCloseTo(expected, 5);
    });

    // Test case 8: Cosine of NaN (should throw an error)
    it('8. should throw an error for NaN input', () => {
        const degrees: number = NaN;
        expect(() => calculateCosine(degrees)).toThrow('Degrees must be a number');
    });
});
