
// uniqueValues.ts
  export function uniqueValues<T extends Record<string, any>>(obj: T): any[] {
    return [...new Set(Object.values(obj))];
  }