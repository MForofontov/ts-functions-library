/**
 * Calculates the age in years from a date of birth.
 * 
 * @param dob - The date of birth.
 * @returns The age in years.
 * @throws Will throw an error if the date of birth is invalid.
 */
export function calculateAge(dob: Date): number {
    if (isNaN(dob.getTime())) {
        throw new Error('Invalid date of birth');
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if the current date is before the birth date in the current year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    if (age < 0) {
        throw new Error('Date of birth is in the future');
    }

    return age;
}

// Example usage:
// const dob = new Date('1990-09-19');
// calculateAge(dob); // e.g., 34