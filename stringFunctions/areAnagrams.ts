/**
 * Checks if two strings are anagrams of each other.
 *
 * @param str1 - The first string.
 * @param str2 - The second string.
 * @returns True if the strings are anagrams, false otherwise.
 *
 * @example
 * areAnagrams("listen", "silent"); // true
 *
 */
export function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
