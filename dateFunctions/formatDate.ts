/**
 * Formats a Date object into a human-readable string.
 *
 * @param date - The Date object to format.
 * @param format - The format string (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY').
 * @returns The formatted date string.
 * @throws Will throw an error if the date is invalid or if the format string contains unsupported tokens.
 */
export function formatDate(date: Date, format: string): string {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const supportedTokens = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss'];
  const formatTokens = format.match(/[A-Za-z]{1,4}/g) || [];
  const invalidTokens = formatTokens.filter(
    (token) => !supportedTokens.includes(token),
  );

  if (invalidTokens.length > 0) {
    throw new Error(
      `Unsupported format tokens: ${invalidTokens.join(', ')}. Supported tokens are: ${supportedTokens.join(', ')}`,
    );
  }

  const year = date.getFullYear();
  const formattedYear =
    year < 0
      ? `-${String(Math.abs(year)).padStart(6, '0')}`
      : String(year).padStart(4, '0');

  const map: { [key: string]: string } = {
    YYYY: formattedYear,
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
}

// Example usage:
// const date = new Date();
// formatDate(date, 'YYYY-MM-DD HH:mm:ss'); // e.g., '2024-09-19 15:45:30'
