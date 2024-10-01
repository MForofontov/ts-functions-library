import { calculateProduct } from '../../arrayFunctions/calculateProduct';

describe('calculateProduct', () => {
    it('should return the product of all numbers in the array', () => {
        expect(calculateProduct([1, 2, 3, 4])).toBe(24);
        expect(calculateProduct([2, 5, 6])).toBe(60);
    });

    it('should return 1 for an empty array', () => {
        expect(calculateProduct([])).toBe(1);
    });

    it('should handle arrays with negative numbers', () => {
        expect(calculateProduct([-1, 2, -3, 4])).toBe(24);
    });

    it('should handle arrays with a single element', () => {
        expect(calculateProduct([5])).toBe(5);
    });

    it('should handle arrays with zero', () => {
        expect(calculateProduct([1, 2, 0, 4])).toBe(0);
    });
});