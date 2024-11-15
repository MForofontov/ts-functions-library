import { daysLeftInYear } from '../../dateFunctions/daysLeftInYear';

describe('daysLeftInYear', () => {
    // Test case 1: Days left in the year from a date in January
    it('1. should return the correct number of days left in the year from a date in January', () => {
        const date: Date = new Date('2023-01-01');
        const expected: number = 364; // 2023 is not a leap year
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 2: Days left in the year from a date in December
    it('2. should return the correct number of days left in the year from a date in December', () => {
        const date: Date = new Date('2023-12-01');
        const expected: number = 30;
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 3: Days left in the year from a date on December 31
    it('3. should return 0 days left in the year from a date on December 31', () => {
        const date: Date = new Date('2023-12-31');
        const expected: number = 0;
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 4: Days left in the year from a date in a leap year
    it('4. should return the correct number of days left in the year from a date in a leap year', () => {
        const date: Date = new Date('2024-02-29');
        const expected: number = 306; // 2024 is a leap year
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 5: Days left in the year from a date in the middle of the year
    it('5. should return the correct number of days left in the year from a date in the middle of the year', () => {
        const date: Date = new Date('2023-07-01');
        const expected: number = 183;
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 6: Days left in the year from a date in the past
    it('6. should return the correct number of days left in the year from a date in the past', () => {
        const date: Date = new Date('2000-01-01');
        const expected: number = 365; // 2000 is a leap year
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 7: Days left in the year from a date in the future
    it('7. should return the correct number of days left in the year from a date in the future', () => {
        const date: Date = new Date('3000-01-01');
        const expected: number = 364; // Assuming 3000 is not a leap year
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 8: Days left in the year from a date on February 28 in a leap year
    it('8. should return the correct number of days left in the year from a date on February 28 in a leap year', () => {
        const date: Date = new Date('2024-02-28');
        const expected: number = 307; // 2024 is a leap year
        const result: number = daysLeftInYear(date);
        expect(result).toBe(expected);
    });

    // Test case 9: Days left in the year from an invalid date (should throw an error)
    it('9. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        expect(() => daysLeftInYear(date)).toThrow('Invalid date');
    });

    // Test case 10: Days left in the year from a NaN date (should throw an error)
    it('10. should throw an error for a NaN date', () => {
        const date: Date = new Date(NaN);
        expect(() => daysLeftInYear(date)).toThrow('Invalid date');
    });
});
