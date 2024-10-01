import { calculateAverage } from '../../arrayFunctions/calculateAverage';
import { sumArrayElements } from '../../arrayFunctions/sumArrayElements';

// Mock the sumArrayElements function
jest.mock('../../arrayFunctions/sumArrayElements');

describe('calculateAverage', () => {
    it('should return the average of all numbers in the array', () => {
        (sumArrayElements as jest.Mock).mockReturnValueOnce(10);
        expect(calculateAverage([1, 2, 3, 4])).toBe(2.5);
    });

    it('should return 0 for an empty array', () => {
        (sumArrayElements as jest.Mock).mockReturnValueOnce(0);
        expect(calculateAverage([])).toBe(0);
    });

    it('should handle arrays with negative numbers', () => {
        (sumArrayElements as jest.Mock).mockReturnValueOnce(-10);
        expect(calculateAverage([-1, -2, -3, -4])).toBe(-2.5);
    });

    it('should handle arrays with a single element', () => {
        (sumArrayElements as jest.Mock).mockReturnValueOnce(5);
        expect(calculateAverage([5])).toBe(5);
    });

    it('should handle arrays with mixed positive and negative numbers', () => {
        (sumArrayElements as jest.Mock).mockReturnValueOnce(0);
        expect(calculateAverage([-1, 1, -2, 2])).toBe(0);
    });
});