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
export function unflattenObject(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }

  const result: Record<string, unknown> = {};

  for (const [flatKey, value] of Object.entries(obj)) {
    const parts = flatKey.replace(/\[(\d+)\]/g, '.$1').split('.');
    let current: Record<string, unknown> | unknown[] = result;

    parts.forEach((part, idx) => {
      const isLast = idx === parts.length - 1;
      const nextIsIndex = /^\d+$/.test(parts[idx + 1]);
      const isIndex = /^\d+$/.test(part);

      if (isLast) {
        if (isIndex) {
          if (!Array.isArray(current)) current = [];
          (current as unknown[])[Number(part)] = value;
        } else {
          (current as Record<string, unknown>)[part] = value;
        }
      } else {
        if (isIndex) {
          if (!Array.isArray((current as any)[Number(part)])) {
            (current as any)[Number(part)] = nextIsIndex ? [] : {};
          }
          current = (current as any)[Number(part)];
        } else {
          if (
            !(current as Record<string, unknown>)[part] ||
            typeof (current as Record<string, unknown>)[part] !== 'object'
          ) {
            (current as Record<string, unknown>)[part] = nextIsIndex ? [] : {};
          }
          current = (current as any)[part] as
            | Record<string, unknown>
            | unknown[];
        }
      }
    });
  }

  return result;
}
