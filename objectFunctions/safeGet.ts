/**
 * Safely retrieves a nested property value from an object using a dot-notation path.
 * Returns a default value if the property doesn't exist or any part of the path is invalid.
 *
 * @param obj - The source object to retrieve the value from.
 * @param path - A dot-notation string representing the property path (e.g., 'user.address.city').
 * @param defaultValue - The value to return if the path cannot be resolved, defaults to undefined.
 * @returns The value at the specified path or the default value if not found.
 * @throws When the input object is not a non-null object.
 *
 * @example
 * // Basic property access
 * const user = { name: 'John', address: { city: 'New York', zip: 10001 } };
 * safeGet(user, 'address.city'); // => 'New York'
 *
 * @note Returns the default value if any segment of the path doesn't exist.
 * @note Only supports dot notation and doesn't handle array indices.
 */
export function safeGet<T>(
  obj: T,
  path: string,
  defaultValue: any = undefined,
): any {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  return path
    .split('.')
    .reduce(
      (acc, key) =>
        acc && (acc as any)[key] !== undefined
          ? (acc as any)[key]
          : defaultValue,
      obj,
    );
}
