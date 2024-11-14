import { addMonths } from '../../dateFunctions/addMonths';

describe('addMonths', () => {
    // Test case 1: Adding positive months to a date
    it('1. should correctly add positive months to a date', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = 3;
        const expected: Date = new Date('2023-04-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 2: Adding negative months to a date
    it('2. should correctly subtract months when adding negative months to a date', () => {
        const date: Date = new Date('2023-04-01');
        const months: number = -3;
        const expected: Date = new Date('2023-01-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 3: Adding zero months to a date
    it('3. should return the same date when adding zero months', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = 0;
        const expected: Date = new Date('2023-01-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 4: Adding months to a date that results in a year change
    it('4. should correctly handle year change when adding months', () => {
        const date: Date = new Date('2023-10-01');
        const months: number = 5;
        const expected: Date = new Date('2024-03-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 5: Adding months to a date that results in a month change
    it('5. should correctly handle month change when adding months', () => {
        const date: Date = new Date('2023-01-31');
        const months: number = 1;
        const expected: Date = new Date('2023-02-28'); // February has 28 days in 2023
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 6: Adding months to a leap year date
    it('6. should correctly handle leap year when adding months', () => {
        const date: Date = new Date('2020-01-31');
        const months: number = 1;
        const expected: Date = new Date('2020-02-29'); // February has 29 days in 2020
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 7: Adding a large number of months to a date
    it('7. should correctly handle adding a large number of months', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = 24;
        const expected: Date = new Date('2025-01-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 8: Adding a very large number of months to a date
    it('8. should correctly handle adding a very large number of months', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = 120;
        const expected: Date = new Date('2033-01-01');
        const result: Date = addMonths(date, months);
        expect(result).toEqual(expected);
    });

    // Test case 9: Adding months to an invalid date (should throw an error)
    it('9. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        const months: number = 3;
        expect(() => addMonths(date, months)).toThrow('Invalid date');
    });

    // Test case 10: Adding NaN months to a date (should throw an error)
    it('10. should throw an error for NaN months', () => {
        const date: Date = new Date('2023-01-01');
        const months: number = NaN;
        expect(() => addMonths(date, months)).toThrow('Months must be a number');
    });
});
