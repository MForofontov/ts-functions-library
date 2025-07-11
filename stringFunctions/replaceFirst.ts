/**
 * Replaces the first occurrence of a substring in a string with a new substring.
 *
 * @param str - The string to search within.
 * @param searchValue - The substring to find.
 * @param replaceValue - The substring to replace with.
 * @returns The string with the first occurrence of the substring replaced.
 *
 * @example
 * replaceFirst("hello world", "world", "everyone"); // "hello everyone"
 * replaceFirst("hello world world", "world", "everyone"); // "hello everyone world"
 *
 */
export function replaceFirst(
  str: string,
  searchValue: string,
  replaceValue: string,
): string {
  if (searchValue === '') {
    return str;
  }
  const index = str.indexOf(searchValue);
  if (index === -1) {
    return str;
  }
  return str.replace(searchValue, replaceValue);
}
