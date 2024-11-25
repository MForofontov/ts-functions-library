import { addDays } from '../../dateFunctions/addDays';

describe('addDays', () => {
    // Test case 1: Add days to a valid date
    it('1. should add days to a valid date', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 10;
        const expected: Date = new Date('2023-01-11');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 2: Add days to a leap year date
    it('2. should add days to a leap year date', () => {
        const date: Date = new Date('2020-02-29');
        const days: number = 1;
        const expected: Date = new Date('2020-03-01');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 3: Add days to a date with time components
    it('3. should add days to a date with time components', () => {
        const date: Date = new Date('2023-01-15T12:34:56');
        const days: number = 10;
        const expected: Date = new Date('2023-01-25T12:34:56');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 4: Add days to a date at the start of the year
    it('4. should add days to a date at the start of the year', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 1;
        const expected: Date = new Date('2023-01-02');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 5: Add days to a date at the end of the year
    it('5. should add days to a date at the end of the year', () => {
        const date: Date = new Date('2023-12-31');
        const days: number = 1;
        const expected: Date = new Date('2024-01-01');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 6: Add days to a date with zero time components
    it('6. should add days to a date with zero time components', () => {
        const date: Date = new Date('2023-01-01T00:00:00');
        const days: number = 10;
        const expected: Date = new Date('2023-01-11T00:00:00');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 7: Add days to a date with a negative year
    it('7. should add days to a date with a negative year', () => {
        const date: Date = new Date('-000001-01-01');
        const days: number = 10;
        const expected: Date = new Date('-000001-01-11');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Error test case 1: Add days to a NaN date (should throw an error)
    it('8. should throw an error for a NaN date', () => {
        const date: Date = new Date(NaN);
        const days: number = 10;
        expect(() => addDays(date, days)).toThrow('Invalid date');
    });

    // Error test case 2: Add days to an invalid date (should throw an error)
    it('9. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        const days: number = 10;
        expect(() => addDays(date, days)).toThrow('Invalid date');
    });

    // Error test case 3: Add days with a NaN days value (should throw an error)
    it('10. should throw an error for a NaN days value', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = NaN;
        expect(() => addDays(date, days)).toThrow('Days must be a number');
    });
});
