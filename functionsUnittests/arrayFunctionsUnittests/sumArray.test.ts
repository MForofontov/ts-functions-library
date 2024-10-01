import { sumArrayElements } from '../../arrayFunctions/sumArrayElements';

describe('sumArrayElements', () => {
    it('should return the sum of all numbers in the array', () => {
        expect(sumArrayElements([1, 2, 3, 4])).toBe(10);
        expect(sumArrayElements([0, -1, -2, -3])).toBe(-6);
    });

    it('should return 0 for an empty array', () => {
        expect(sumArrayElements([])).toBe(0);
    });
});