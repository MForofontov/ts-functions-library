// isDeepSubset.ts
  export function isDeepSubset<T extends Record<string, any>>(subset: T, obj: T): boolean {
    return Object.keys(subset).every(key =>
      typeof subset[key] === 'object' && subset[key] !== null
        ? isDeepSubset(subset[key], obj[key])
        : subset[key] === obj[key]
    );
  }
  
  // objectSize.ts
  export function objectSize(obj: Record<string, any>): number {
    return Object.keys(obj).length;
  }
  
  // sortObjectKeys.ts
  export function sortObjectKeys<T extends Record<string, any>>(obj: T): T {
    return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))) as T;
  }
  
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