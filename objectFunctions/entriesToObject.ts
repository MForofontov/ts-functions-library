/**
 * Converts an array of key-value pairs (entries) into an object.
 *
 * @param entries - Array of [key, value] pairs where keys must be strings.
 * @returns An object with properties created from the entries.
 * @throws When input is not an array or contains invalid entries.
 *
 * @example
 * const entries = [['name', 'John'], ['age', 30], ['city', 'New York']];
 * const obj = entriesToObject(entries);
 * // => { name: 'John', age: 30, city: 'New York' }
 *
 * @example
 * // With different value types
 * const mixed = [['id', 1], ['active', true], ['data', { count: 5 }]];
 * const result = entriesToObject(mixed);
 * // => { id: 1, active: true, data: { count: 5 } }
 */
export function entriesToObject<T>(entries: [string, unknown][]): T {
  if (!Array.isArray(entries)) {
    throw new TypeError('Input must be an array of key-value pairs');
  }

  for (const entry of entries) {
    if (
      !Array.isArray(entry) ||
      entry.length !== 2 ||
      typeof entry[0] !== 'string'
    ) {
      throw new TypeError('Each entry must be a [string, any] pair');
    }
  }

  return Object.fromEntries(entries) as T;
}
