/**
 * Currency code to symbol mapping for common currencies.
 */
const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CNY: '¥',
  INR: '₹',
  RUB: '₽',
  BRL: 'R$',
  KRW: '₩',
  AUD: 'A$',
  CAD: 'C$',
  CHF: 'CHF',
  SEK: 'kr',
  NZD: 'NZ$',
  MXN: '$',
  SGD: 'S$',
  HKD: 'HK$',
  NOK: 'kr',
  TRY: '₺',
  ZAR: 'R',
  PLN: 'zł',
  THB: '฿',
  IDR: 'Rp',
  MYR: 'RM',
  PHP: '₱',
  DKK: 'kr',
  CZK: 'Kč',
  ILS: '₪',
  AED: 'د.إ',
  SAR: '﷼',
};

/**
 * Formats a number as currency with automatic symbol detection or custom formatting.
 * Supports currency codes (USD, EUR, etc.) which automatically add the appropriate symbol,
 * or direct symbol input for custom formatting.
 *
 * @param value - The numeric value to format.
 * @param currency - Currency code (USD, EUR, etc.) or custom symbol (default: "USD").
 * @param decimals - Number of decimal places (default: 2).
 * @param thousandsSeparator - Character for thousands separator (default: ",").
 * @param decimalSeparator - Character for decimal separator (default: ".").
 * @returns A formatted currency string.
 *
 * @throws {TypeError} If value is not a number or is NaN.
 * @throws {TypeError} If currency is not a string.
 * @throws {TypeError} If decimals is not a number or is NaN.
 * @throws {TypeError} If thousandsSeparator is not a string.
 * @throws {TypeError} If decimalSeparator is not a string.
 * @throws {Error} If decimals is negative.
 * @throws {Error} If thousandsSeparator or decimalSeparator is not exactly one character.
  // Input validation
  if (typeof value !== 'number' || isNaN(value)) {
    throw new TypeError(`value must be a number, got ${typeof value}`);
  }
  if (typeof currency !== 'string') {
    throw new TypeError(`currency must be a string, got ${typeof currency}`);
  }
  if (typeof decimals !== 'number' || isNaN(decimals)) {
    throw new TypeError(`decimals must be a number, got ${typeof decimals}`);
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
  if (thousandsSeparator.length !== 1) {
    throw new Error(
      `thousandsSeparator must be exactly one character, got "${thousandsSeparator}"`,
    );
  }
  if (decimalSeparator.length !== 1) {
    throw new Error(
      `decimalSeparator must be exactly one character, got "${decimalSeparator}"`,
    );
  }   `currencySymbol must be a string, got ${typeof currencySymbol}`,
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

  // Combine parts
  let formattedNumber = formattedInteger;
  if (decimals > 0) {
    formattedNumber += decimalSeparator + decimalPart;
  }

  // Check if currency is a currency code
  const currencyUpper = currency.toUpperCase();
  const isCurrencyCode = currencyUpper.length === 3 && currencyUpper in CURRENCY_SYMBOLS;

  // Format with currency
  let result: string;
  if (isCurrencyCode) {
    // Format: "1,234.56 USD ($)"
    const symbol = CURRENCY_SYMBOLS[currencyUpper];
    result = `${formattedNumber} ${currencyUpper} (${symbol})`;
  } else {
    // Custom symbol format: "1,234.56 $"
    result = `${formattedNumber} ${currency}`;
  }

  return isNegative ? `-${result}` : result;
}