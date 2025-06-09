/**
 * Sets a value at a specified nested path within an object, creating intermediate objects as needed.
 *
 * @param obj - The object to modify.
 * @param path - The dot-notation path where the value should be set (e.g., 'user.address.city').
 * @param value - The value to set at the specified path.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Update existing nested value
 * const user = { a: { b: { c: 3 } } };
 * setNestedValue(user, 'a.b.c', 4);
 * // user becomes: { a: { b: { c: 4 } } }
 *
 * @example
 * // Create missing intermediate objects
 * const data = {};
 * setNestedValue(data, 'user.profile.name', 'John');
 * // data becomes: { user: { profile: { name: 'John' } } }
 *
 * @example
 * // Replace primitive with object
 * const config = { theme: 'dark' };
 * setNestedValue(config, 'theme.color', 'blue');
 * // config becomes: { theme: { color: 'blue' } }
 *
 * @note Modifies the original object directly without creating a copy.
 * @note Only supports dot notation and doesn't handle array indices.
 */
export function setNestedValue(
  obj: Record<string, any>,
  path: string,
  value: any,
): void {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (typeof current[keys[i]] !== 'object' || current[keys[i]] === null) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}
