import { getFirstDateOfWeek } from '../../dateFunctions/getFirstDateOfWeek';

describe('getFirstDateOfWeek', () => {
    // Test case 1: Get the first date of the week starting on Sunday
    it('1. should return the first date of the week starting on Sunday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-17');
        const result: Date = getFirstDateOfWeek(date, 0);
        expect(result).toEqual(expected);
    });

    // Test case 2: Get the first date of the week starting on Monday
    it('2. should return the first date of the week starting on Monday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-18');
        const result: Date = getFirstDateOfWeek(date, 1);
        expect(result).toEqual(expected);
    });

    // Test case 3: Get the first date of the week starting on Tuesday
    it('3. should return the first date of the week starting on Tuesday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-19');
        const result: Date = getFirstDateOfWeek(date, 2);
        expect(result).toEqual(expected);
    });

    // Test case 4: Get the first date of the week starting on Wednesday
    it('4. should return the first date of the week starting on Wednesday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-13');
        const result: Date = getFirstDateOfWeek(date, 3);
        expect(result).toEqual(expected);
    });

    // Test case 5: Get the first date of the week starting on Thursday
    it('5. should return the first date of the week starting on Thursday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-14');
        const result: Date = getFirstDateOfWeek(date, 4);
        expect(result).toEqual(expected);
    });

    // Test case 6: Get the first date of the week starting on Friday
    it('6. should return the first date of the week starting on Friday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-15');
        const result: Date = getFirstDateOfWeek(date, 5);
        expect(result).toEqual(expected);
    });

    // Test case 7: Get the first date of the week starting on Saturday
    it('7. should return the first date of the week starting on Saturday', () => {
        const date: Date = new Date('2023-09-19');
        const expected: Date = new Date('2023-09-16');
        const result: Date = getFirstDateOfWeek(date, 6);
        expect(result).toEqual(expected);
    });

    // Test case 8: Get the first date of the week for a date with time components
    it('8. should return the first date of the week for a date with time components', () => {
        const date: Date = new Date('2023-09-19T12:34:56');
        const expected: Date = new Date('2023-09-17');
        const result: Date = getFirstDateOfWeek(date, 0);
        expect(result).toEqual(expected);
    });

    // Test case 9: Get the first date of the week for a NaN date (should throw an error)
    it('9. should throw an error for a NaN date', () => {
        const date: Date = new Date(NaN);
        expect(() => getFirstDateOfWeek(date)).toThrow('Invalid date');
    });

    // Test case 10: Get the first date of the week for an invalid date (should throw an error)
    it('10. should throw an error for an invalid date', () => {
        const date: Date = new Date('invalid-date');
        expect(() => getFirstDateOfWeek(date)).toThrow('Invalid date');
    });

    // Test case 11: Get the first date of the week for an invalid startOfWeek value (should throw an error)
    it('11. should throw an error for an invalid startOfWeek value', () => {
        const date: Date = new Date('2023-09-19');
        expect(() => getFirstDateOfWeek(date, 7)).toThrow('Invalid startOfWeek value. It must be a number between 0 (Sunday) and 6 (Saturday).');
    });

    // Test case 12: Get the first date of the week for a NaN startOfWeek value (should throw an error)
    it('12. should throw an error for a NaN startOfWeek value', () => {
        const date: Date = new Date('2023-09-19');
        expect(() => getFirstDateOfWeek(date, NaN)).toThrow('Invalid startOfWeek value. It must be a number between 0 (Sunday) and 6 (Saturday).');
    });
});
