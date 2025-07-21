/**
 * Safely sets a value at a specified path in an object, creating intermediate objects if needed.
 * Uses dot notation to navigate nested properties.
 *
 * @param obj - The object to modify.
 * @param path - The dot-notation path where the value should be set (e.g., 'user.address.city').
 * @param value - The value to set at the specified path.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Set a value in a nested path, creating objects as needed
 * const user = { name: 'John' };
 * safeSet(user, 'address.city', 'New York');
 * // user becomes: { name: 'John', address: { city: 'New York' } }
 *
 * @note Modifies the original object and does not create a copy.
 * @note Creates empty objects for any missing intermediate properties.
 * @note Only supports dot notation and doesn't handle array indices.
 */
export function safeSet<T extends Record<string, unknown>, V>(
  obj: T,
  path: string,
  value: V,
): void {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  if (path === '') return;
  if (Object.prototype.hasOwnProperty.call(obj, path)) {
    (obj as Record<string, unknown>)[path] = value as unknown;
    return;
  }

  const keys = path.split('.').filter((k) => k);
  let current: Record<string, unknown> = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const rest = keys.slice(i).join('.');
    if (Object.prototype.hasOwnProperty.call(current, rest)) {
      (current as Record<string, unknown>)[rest] = value as unknown;
      return;
    }
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  (current as Record<string, unknown>)[keys[keys.length - 1]] = value as unknown;
}
