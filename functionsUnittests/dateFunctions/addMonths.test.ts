import { addMonths } from '../../dateFunctions/addMonths';

describe('addMonths', () => {
    // Test case 1: Add months to a valid date
    it('1. should add months to a valid date', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = 2;
        const expected: Date = new Date('2023-03-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 2: Add months to a leap year date
    it('2. should add months to a leap year date', () => {
        const date: Date = new Date('2020-02-29');
        const months: number = 1;
        const expected: Date = new Date('2020-03-29');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 3: Add months to a date with time components
    it('3. should add months to a date with time components', () => {
        const date: Date = new Date('2023-01-15T12:34:56');
        const months: number = 2;
        const expected: Date = new Date('2023-03-15T12:34:56');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 4: Add months to a date at the start of the year
    it('4. should add months to a date at the start of the year', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = 1;
        const expected: Date = new Date('2023-02-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 5: Add months to a date at the end of the year
    it('5. should add months to a date at the end of the year', () => {
        const date: Date = new Date('2023-12-31');
        const months: number = 1;
        const expected: Date = new Date('2024-01-31');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 6: Add months to a date with zero time components
    it('6. should add months to a date with zero time components', () => {
        const date: Date = new Date('2023-01-01T00:00:00');
        const months: number = 2;
        const expected: Date = new Date('2023-03-01T00:00:00');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 7: Add months to a date with a negative year
    it('7. should add months to a date with a negative year', () => {
        const date: Date = new Date('-000001-01-01');
        const months: number = 2;
        const expected: Date = new Date('-000001-03-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Error test case 1: Add months to a NaN date (should throw an error)
    it('8. should throw an error for a NaN date', () => {
        const date: Date = new Date(NaN);
        const months: number = 2;
        expect(() => addMonths(date, months)).toThrow('Invalid date');
    });

    // Error test case 2: Add months to an invalid date (should throw an error)
    it('9. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        const months: number = 2;
        expect(() => addMonths(date, months)).toThrow('Invalid date');
    });

    // Error test case 3: Add months with a NaN months value (should throw an error)
    it('10. should throw an error for a NaN months value', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = NaN;
        expect(() => addMonths(date, months)).toThrow('Invalid months value');
    });
});
