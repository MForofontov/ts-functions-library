/**
 * Validates if a credit card number is valid using the Luhn algorithm.
 *
 * @param cardNumber - The credit card number to validate (can contain spaces or dashes).
 * @returns True if the credit card number is valid, false otherwise.
 *
 * @throws {TypeError} If cardNumber is not a string.
 * @throws {Error} If cardNumber is empty after removing spaces and dashes.
 *
 * @example
 * // Valid credit card number
 * isValidCreditCard("4532015112830366"); // true
 *
 * @example
 * // Invalid credit card number
 * isValidCreditCard("1234567890123456"); // false
 *
 * @example
 * // With spaces and dashes
 * isValidCreditCard("4532-0151-1283-0366"); // true
 * isValidCreditCard("4532 0151 1283 0366"); // true
 *
 * @note Uses the Luhn algorithm (mod 10 check) to validate credit card numbers.
 *
 * @complexity Time: O(n), Space: O(1)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (typeof cardNumber !== 'string') {
    throw new TypeError(
      `cardNumber must be a string, got ${typeof cardNumber}`,
    );
  }

  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');

  if (cleanNumber.length === 0) {
    throw new Error(
      'cardNumber cannot be empty after removing spaces and dashes',
    );
  }

  // Check if all characters are digits
  if (!/^\d+$/.test(cleanNumber)) {
    return false;
  }

  // Check minimum length (13 digits for Visa)
  if (cleanNumber.length < 13) {
    return false;
  }

  // Luhn algorithm
  let sum = 0;
  let isEvenPosition = false;

  // Process digits from right to left
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i], 10);

    if (isEvenPosition) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEvenPosition = !isEvenPosition;
  }

  return sum % 10 === 0;
}
