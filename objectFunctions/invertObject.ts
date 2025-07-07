export function invertObject(obj: Record<string | number | symbol, any>): Record<string, any> {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Input must be a non-null object');
  }
  const result: Record<string, any> = {};
  for (const key of Reflect.ownKeys(obj)) {
    const value = (obj as any)[key];
    result[String(value)] = key as any;
  }
  return result;
}
