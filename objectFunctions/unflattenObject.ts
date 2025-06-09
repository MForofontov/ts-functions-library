/**
 * Reconstructs a nested object from a flat object with dot-notation keys.
 *
 * @param obj - The flat object with dot-notation keys.
 * @returns A nested object structure representing the original hierarchy.
 * @throws When input is not a non-null object.
 *
 * @example
 * // Basic dot notation
 * unflattenObject({ 'a.b.c': 1, 'a.b.d': 2, 'e': 3 });
 * // => { a: { b: { c: 1, d: 2 } }, e: 3 }
 *
 * @example
 * // With nested paths
 * unflattenObject({ 'user.profile.name': 'John', 'user.profile.age': 30, 'user.active': true });
 * // => { user: { profile: { name: 'John', age: 30 }, active: true } }
 *
 * @note Only handles simple dot notation and doesn't support array indices in square brackets.
 * @note If properties conflict during reconstruction, the last one processed will override previous values.
 * @note Doesn't handle escaped dots in property names.
 */
export function unflattenObject(obj: Record<string, any>): Record<string, any> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  const result: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
    const keys = key.split('.');
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        current[keys[i]] = value;
      } else {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
    }
  }

  return result;
}
