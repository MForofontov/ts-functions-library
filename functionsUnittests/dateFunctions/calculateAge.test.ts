import { calculateAge } from '../../dateFunctions/calculateAge';

describe('calculateAge', () => {
    // Test case 1: Calculate age for a date of birth in the past
    it('1. should return the correct age for a date of birth in the past', () => {
        const dob: Date = new Date('1990-09-19');
        const expected: number = new Date().getFullYear() - 1990 - 1; // Assuming today's date is before September 19
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 2: Calculate age for a date of birth on today's date
    it('2. should return 0 for a date of birth on today\'s date', () => {
        const dob: Date = new Date();
        const expected: number = 0;
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 3: Calculate age for a date of birth on a leap day
    it('3. should return the correct age for a date of birth on a leap day', () => {
        const dob: Date = new Date('2000-02-29');
        const expected: number = new Date().getFullYear() - 2000;
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 4: Calculate age for a date of birth in the same month but different day
    it('4. should return the correct age for a date of birth in the same month but different day', () => {
        const dob: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
        const expected: number = 0;
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 5: Calculate age for a date of birth in the same year but different month
    it('5. should return the correct age for a date of birth in the same year but different month', () => {
        const dob: Date = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate());
        const expected: number = 0;
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 6: Calculate age for a date of birth in the same year and month but different day
    it('6. should return the correct age for a date of birth in the same year and month but different day', () => {
        const dob: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
        const expected: number = 0;
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 7: Calculate age for a date of birth on the last day of the year
    it('7. should return the correct age for a date of birth on the last day of the year', () => {
        const dob: Date = new Date('2000-12-31');
        const expected: number = new Date().getFullYear() - 2000 - 1; // Assuming today's date is before December 31
        const result: number = calculateAge(dob);
        expect(result).toBe(expected);
    });

    // Test case 8: Calculate age for a date of birth in the future (should throw an error)
    it('8. should throw an error for a date of birth in the future', () => {
        const dob: Date = new Date('3000-01-01');
        expect(() => calculateAge(dob)).toThrow('Invalid date of birth');
    });
    
    // Test case 9: Calculate age for an invalid date of birth (should throw an error)
    it('9. should throw an error for an invalid date of birth', () => {
        const dob: Date = new Date('invalid-date');
        expect(() => calculateAge(dob)).toThrow('Invalid date of birth');
    });

    // Test case 10: Calculate age for a NaN date of birth (should throw an error)
    it('10. should throw an error for a NaN date of birth', () => {
        const dob: Date = new Date(NaN);
        expect(() => calculateAge(dob)).toThrow('Invalid date of birth');
    });
});
