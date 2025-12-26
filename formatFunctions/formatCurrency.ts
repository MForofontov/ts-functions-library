/**
 * Formats a number as currency with symbol, decimals, and locale options.
 * Supports custom currency symbols and formatting patterns.
 *
 * @param value - The numeric value to format.
 * @param currencySymbol - Currency symbol to use (default: "$").
 * @param decimals - Number of decimal places (default: 2).
 * @param symbolPosition - Position of currency symbol: "before" or "after" (default: "before").
 * @param thousandsSeparator - Character for thousands separator (default: ",").
 * @param decimalSeparator - Character for decimal separator (default: ".").
 * @returns A formatted currency string.
 *
 * @throws {TypeError} If value is not a number or is NaN.
 * @throws {TypeError} If currencySymbol is not a string.
 * @throws {TypeError} If decimals is not a number or is NaN.
 * @throws {TypeError} If symbolPosition is not a string.
 * @throws {TypeError} If thousandsSeparator is not a string.
 * @throws {TypeError} If decimalSeparator is not a string.
 * @throws {Error} If decimals is negative.
 * @throws {Error} If symbolPosition is not "before" or "after".
 * @throws {Error} If thousandsSeparator or decimalSeparator is not exactly one character.
 *
 * @example
 * // Basic usage
 * formatCurrency(1234.56); // Returns "$1,234.56"
 *
 * @example
 * // Euro format
 * formatCurrency(1234.56, "€", 2, "after", ".", ","); // Returns "1.234,56€"
 *
 * @example
 * // No decimals
 * formatCurrency(1234, "$", 0); // Returns "$1,234"
 *
 * @example
 * // Negative amount
 * formatCurrency(-500.25); // Returns "-$500.25"
 *
 * @example
 * // Custom symbol
 * formatCurrency(100, "USD ", 2, "before"); // Returns "USD 100.00"
 *
 * @note The function handles negative numbers by placing the minus sign before the currency symbol.
 * Supports flexible formatting for different locales and currencies.
 *
 * @complexity Time: O(n), Space: O(n) - Where n is the number of digits
 */
export function formatCurrency(
  value: number,
  currencySymbol: string = '$',
  decimals: number = 2,
  symbolPosition: 'before' | 'after' = 'before',
  thousandsSeparator: string = ',',
  decimalSeparator: string = '.',
): string {
  // Input validation
  if (typeof value !== 'number' || isNaN(value)) {
    throw new TypeError(`value must be a number, got ${typeof value}`);
  }
  if (typeof currencySymbol !== 'string') {
    throw new TypeError(
      `currencySymbol must be a string, got ${typeof currencySymbol}`,
    );
  }
  if (typeof decimals !== 'number' || isNaN(decimals)) {
    throw new TypeError(`decimals must be a number, got ${typeof decimals}`);
  }
  if (typeof symbolPosition !== 'string') {
    throw new TypeError(
      `symbolPosition must be a string, got ${typeof symbolPosition}`,
    );
  }
  if (typeof thousandsSeparator !== 'string') {
    throw new TypeError(
      `thousandsSeparator must be a string, got ${typeof thousandsSeparator}`,
    );
  }
  if (typeof decimalSeparator !== 'string') {
    throw new TypeError(
      `decimalSeparator must be a string, got ${typeof decimalSeparator}`,
    );
  }

  if (decimals < 0) {
    throw new Error(`decimals must be non-negative, got ${decimals}`);
  }
  if (symbolPosition !== 'before' && symbolPosition !== 'after') {
    throw new Error(
      `symbolPosition must be "before" or "after", got "${symbolPosition}"`,
    );
  }
  if (thousandsSeparator.length !== 1) {
    throw new Error(
      `thousandsSeparator must be exactly one character, got "${thousandsSeparator}"`,
    );
  }
  if (decimalSeparator.length !== 1) {
    throw new Error(
      `decimalSeparator must be exactly one character, got "${decimalSeparator}"`,
    );
  }

  // Handle sign
  const isNegative = value < 0;
  const absoluteValue = Math.abs(value);

  // Round to specified decimals
  const factor = Math.pow(10, decimals);
  const rounded = Math.round(absoluteValue * factor) / factor;

  // Split into integer and decimal parts
  const parts = rounded.toFixed(decimals).split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1];

  // Add thousands separators
  const formattedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator,
  );

  // Combine parts
  let formattedNumber = formattedInteger;
  if (decimals > 0) {
    formattedNumber += decimalSeparator + decimalPart;
  }

  // Add currency symbol
  const result =
    symbolPosition === 'before'
      ? `${currencySymbol}${formattedNumber}`
      : `${formattedNumber}${currencySymbol}`;

  return isNegative ? `-${result}` : result;
}
