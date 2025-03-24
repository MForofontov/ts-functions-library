
  // differenceBy.ts
  export function differenceBy<T extends Record<string, any>>(
    obj1: T,
    obj2: T,
    comparator: (a: any, b: any) => boolean
  ): Partial<T> {
    return Object.fromEntries(
      Object.entries(obj1).filter(([key, value]) => !comparator(value, obj2[key]))
    );
  }
  
  // uniqueValues.ts
  export function uniqueValues<T extends Record<string, any>>(obj: T): any[] {
    return [...new Set(Object.values(obj))];
  }