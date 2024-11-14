import { addDays } from '../../dateFunctions/addDays';

describe('addDays', () => {
    // Test case 1: Adding positive days to a date
    it('1. should correctly add positive days to a date', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 10;
        const expected: Date = new Date('2023-01-11');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 2: Adding negative days to a date
    it('2. should correctly subtract days when adding negative days to a date', () => {
        const date: Date = new Date('2023-01-10');
        const days: number = -5;
        const expected: Date = new Date('2023-01-05');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 3: Adding zero days to a date
    it('3. should return the same date when adding zero days', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 0;
        const expected: Date = new Date('2023-01-01');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 4: Adding days to a date that results in a month change
    it('4. should correctly handle month change when adding days', () => {
        const date: Date = new Date('2023-01-28');
        const days: number = 5;
        const expected: Date = new Date('2023-02-02');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 5: Adding days to a date that results in a year change
    it('5. should correctly handle year change when adding days', () => {
        const date: Date = new Date('2023-12-28');
        const days: number = 5;
        const expected: Date = new Date('2024-01-02');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 6: Adding days to a leap year date
    it('6. should correctly handle leap year when adding days', () => {
        const date: Date = new Date('2020-02-28');
        const days: number = 1;
        const expected: Date = new Date('2020-02-29');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 7: Adding days to a non-leap year date
    it('7. should correctly handle non-leap year when adding days', () => {
        const date: Date = new Date('2021-02-28');
        const days: number = 1;
        const expected: Date = new Date('2021-03-01');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 8: Adding a large number of days to a date
    it('8. should correctly handle adding a large number of days', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 1000;
        const expected: Date = new Date('2025-09-27');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 9: Adding a very large number of days to a date
    it('9. should correctly handle adding a very large number of days', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 10000;
        const expected: Date = new Date('2050-05-19');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 10: Adding a very small number of days to a date
    it('10. should correctly handle adding a very small number of days', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = 0.5;
        const expected: Date = new Date('2023-01-01T12:00:00.000Z');
        const result: Date = addDays(date, days);
        expect(result).toEqual(expected);
    });

    // Test case 11: Adding days to an invalid date (should throw an error)
    it('11. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        const days: number = 10;
        expect(() => addDays(date, days)).toThrow('Invalid date');
    });

    // Test case 12: Adding NaN days to a date (should throw an error)
    it('12. should throw an error for NaN days', () => {
        const date: Date = new Date('2023-01-01');
        const days: number = NaN;
        expect(() => addDays(date, days)).toThrow('Days must be a number');
    });
});
