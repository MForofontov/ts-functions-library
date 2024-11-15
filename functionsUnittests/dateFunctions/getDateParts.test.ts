import { getDateParts } from '../../dateFunctions/getDateParts';

describe('getDateParts', () => {
    // Test case 1: Extract parts from a valid date
    it('1. should extract parts from a valid date', () => {
        const date: Date = new Date('2024-09-19T15:45:30');
        const expected = { year: 2024, month: 9, day: 19, hours: 15, minutes: 45, seconds: 30 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 2: Extract parts from a date with a leap day
    it('2. should extract parts from a date with a leap day', () => {
        const date: Date = new Date('2020-02-29T12:00:00');
        const expected = { year: 2020, month: 2, day: 29, hours: 12, minutes: 0, seconds: 0 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 3: Extract parts from a date with negative year
    it('3. should extract parts from a date with a negative year', () => {
        const date: Date = new Date('-000001-01-01T00:00:00');
        const expected = { year: -1, month: 1, day: 1, hours: 0, minutes: 0, seconds: 0 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 4: Extract parts from a date with NaN (should throw an error)
    it('4. should throw an error for a NaN date', () => {
        const date: Date = new Date(NaN);
        expect(() => getDateParts(date)).toThrow('Invalid date');
    });

    // Test case 5: Extract parts from an invalid date (should throw an error)
    it('5. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        expect(() => getDateParts(date)).toThrow('Invalid date');
    });

    // Test case 6: Extract parts from a date with time components
    it('6. should extract parts from a date with time components', () => {
        const date: Date = new Date('2023-01-01T23:59:59');
        const expected = { year: 2023, month: 1, day: 1, hours: 23, minutes: 59, seconds: 59 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 7: Extract parts from a date at the start of the year
    it('7. should extract parts from a date at the start of the year', () => {
        const date: Date = new Date('2023-01-01T00:00:00');
        const expected = { year: 2023, month: 1, day: 1, hours: 0, minutes: 0, seconds: 0 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 8: Extract parts from a date at the end of the year
    it('8. should extract parts from a date at the end of the year', () => {
        const date: Date = new Date('2023-12-31T23:59:59');
        const expected = { year: 2023, month: 12, day: 31, hours: 23, minutes: 59, seconds: 59 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 9: Extract parts from a date with zero time components
    it('9. should extract parts from a date with zero time components', () => {
        const date: Date = new Date('2023-01-01T00:00:00');
        const expected = { year: 2023, month: 1, day: 1, hours: 0, minutes: 0, seconds: 0 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });

    // Test case 10: Extract parts from a date with non-zero time components
    it('10. should extract parts from a date with non-zero time components', () => {
        const date: Date = new Date('2023-01-01T12:34:56');
        const expected = { year: 2023, month: 1, day: 1, hours: 12, minutes: 34, seconds: 56 };
        const result = getDateParts(date);
        expect(result).toEqual(expected);
    });
});
