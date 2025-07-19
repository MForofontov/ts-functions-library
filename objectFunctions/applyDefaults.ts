/**
 * Applies default values to an object while preserving existing properties.
 *
 * @param obj - The source object whose properties take precedence.
 * @param defaults - The default values to apply where properties don't exist in source.
 * @returns A new object combining properties from both inputs.
 * @throws When either input is not a non-null object.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const defaults = { b: 3, c: 4 };
 * const result = applyDefaults(obj, defaults);
 * // result: { a: 1, b: 2, c: 4 }
 */
export function applyDefaults<T extends Record<string, unknown>>(
  obj: T,
  defaults: Partial<T>,
): T {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('The first argument must be a non-null object');
  }
  if (typeof defaults !== 'object' || defaults === null) {
    throw new TypeError('The second argument must be a non-null object');
  }

  return { ...defaults, ...obj };
}
