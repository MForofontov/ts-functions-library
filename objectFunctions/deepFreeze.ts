/**
 * Deeply freezes an object and all its nested properties, making it completely immutable.
 *
 * @param obj - The object to freeze.
 * @returns The frozen object (same reference as input).
 * @throws When input is not a non-null object.
 *
 * @example
 * const user = { name: 'John', address: { city: 'New York' } };
 * const frozenUser = deepFreeze(user);
 *
 * // These will throw TypeError in strict mode:
 * user.name = 'Jane';        // Cannot modify top-level property
 * user.address.city = 'LA';  // Cannot modify nested property
 *
 * @note This is a recursive operation that affects the original object.
 * It prevents all properties from being modified, added, or deleted.
 */
export function deepFreeze<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  Object.freeze(obj);
  Object.keys(obj).forEach((key) => {
    const value = (obj as Record<string, unknown>)[key];
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}
