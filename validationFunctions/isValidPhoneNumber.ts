/**
 * Validates if a string is a valid phone number.
 *
 * @param phoneNumber - The phone number string to validate.
 * @param format - The format to validate against ('international' or 'us').
 * @returns True if the phone number is valid, false otherwise.
 *
 * @throws {TypeError} If phoneNumber is not a string or format is not a string.
 * @throws {Error} If format is not 'international' or 'us'.
 *
 * @example
 * // Valid international format
 * isValidPhoneNumber("+1234567890"); // true
 *
 * @example
 * // Valid US format
 * isValidPhoneNumber("(555) 123-4567", "us"); // true
 *
 * @example
 * // Invalid phone number
 * isValidPhoneNumber("123"); // false
 *
 * @note Supports international format (+country code) and US format.
 *
 * @complexity Time: O(n), Space: O(1)
 */
export function isValidPhoneNumber(
  phoneNumber: string,
  format: 'international' | 'us' = 'international',
): boolean {
  if (typeof phoneNumber !== 'string') {
    throw new TypeError(
      `phoneNumber must be a string, got ${typeof phoneNumber}`,
    );
  }

  if (typeof format !== 'string') {
    throw new TypeError(`format must be a string, got ${typeof format}`);
  }

  if (format !== 'international' && format !== 'us') {
    throw new Error("format must be 'international' or 'us'");
  }

  const cleanNumber = phoneNumber.replace(/\s+/g, '');

  if (format === 'international') {
    // International format: +[country code][number] (7-15 digits total after +)
    const internationalRegex = /^\+[1-9]\d{6,14}$/;
    return internationalRegex.test(cleanNumber);
  } else {
    // US format: various patterns
    const usRegex =
      /^(\+1[-.\s]?)?(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
    return usRegex.test(phoneNumber);
  }
}
