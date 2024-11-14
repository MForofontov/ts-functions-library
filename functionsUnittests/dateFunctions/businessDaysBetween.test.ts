import { businessDaysBetween } from '../../dateFunctions/businessDaysBetween';

describe('businessDaysBetween', () => {
    // Test case 1: Business days between two dates within the same week
    it('1. should return the correct number of business days within the same week', () => {
        const start: Date = new Date('2023-01-02'); // Monday
        const end: Date = new Date('2023-01-06'); // Friday
        const expected: number = 5;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 2: Business days between two dates spanning multiple weeks
    it('2. should return the correct number of business days spanning multiple weeks', () => {
        const start: Date = new Date('2023-01-02'); // Monday
        const end: Date = new Date('2023-01-13'); // Friday
        const expected: number = 10;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 3: Business days between two dates within the same month
    it('3. should return the correct number of business days within the same month', () => {
        const start: Date = new Date('2023-01-01'); // Sunday
        const end: Date = new Date('2023-01-31'); // Tuesday
        const expected: number = 22;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 4: Business days between two dates spanning multiple months
    it('4. should return the correct number of business days spanning multiple months', () => {
        const start: Date = new Date('2023-01-01'); // Sunday
        const end: Date = new Date('2023-02-28'); // Tuesday
        const expected: number = 40;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 5: Business days between two dates spanning multiple years
    it('5. should return the correct number of business days spanning multiple years', () => {
        const start: Date = new Date('2022-12-01'); // Thursday
        const end: Date = new Date('2023-01-31'); // Tuesday
        const expected: number = 43;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 6: Business days between two dates that are the same
    it('6. should return 1 for the same date if it is a business day', () => {
        const start: Date = new Date('2023-01-02'); // Monday
        const end: Date = new Date('2023-01-02'); // Monday
        const expected: number = 1;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 7: Business days between two dates that are the same and not a business day
    it('7. should return 0 for the same date if it is not a business day', () => {
        const start: Date = new Date('2023-01-01'); // Sunday
        const end: Date = new Date('2023-01-01'); // Sunday
        const expected: number = 0;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 8: Business days between two dates with start date after end date
    it('8. should return 0 if the start date is after the end date', () => {
        const start: Date = new Date('2023-01-31');
        const end: Date = new Date('2023-01-01');
        const expected: number = 0;
        const result: number = businessDaysBetween(start, end);
        expect(result).toBe(expected);
    });

    // Test case 9: Business days between two dates with invalid start date (should throw an error)
    it('9. should throw an error for an invalid start date', () => {
        const start: Date = new Date('invalid-date');
        const end: Date = new Date('2023-01-31');
        expect(() => businessDaysBetween(start, end)).toThrow('Invalid date');
    });

    // Test case 10: Business days between two dates with invalid end date (should throw an error)
    it('10. should throw an error for an invalid end date', () => {
        const start: Date = new Date('2023-01-01');
        const end: Date = new Date('invalid-date');
        expect(() => businessDaysBetween(start, end)).toThrow('Invalid date');
    });

    // Test case 11: Business days between two dates with NaN start date (should throw an error)
    it('11. should throw an error for a NaN start date', () => {
        const start: Date = new Date(NaN);
        const end: Date = new Date('2023-01-31');
        expect(() => businessDaysBetween(start, end)).toThrow('Invalid date');
    });

    // Test case 12: Business days between two dates with NaN end date (should throw an error)
    it('12. should throw an error for a NaN end date', () => {
        const start: Date = new Date('2023-01-01');
        const end: Date = new Date(NaN);
        expect(() => businessDaysBetween(start, end)).toThrow('Invalid date');
    });
});
