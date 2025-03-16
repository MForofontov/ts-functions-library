
// safeSet.ts
  export function safeSet<T extends Record<string, any>>(
    obj: T,
    path: string,
    value: any
  ): void {
    const keys = path.split('.');
    let current: any = obj;
    while (keys.length > 1) {
      const key = keys.shift()!;
      if (!(key in current)) current[key] = {};
      current = current[key];
    }
    current[keys[0]] = value;
  }
  
  // keyBy.ts
  export function keyBy<T extends Record<string, any>>(
    array: T[],
    key: keyof T
  ): Record<string, T> {
    return Object.fromEntries(array.map(item => [item[key], item]));
  }
  
  // entriesToObject.ts
  export function entriesToObject<T>(entries: [string, any][]): T {
    return Object.fromEntries(entries) as T;
  }
  
  // objectToEntries.ts
  export function objectToEntries<T extends Record<string, any>>(obj: T): [string, any][] {
    return Object.entries(obj);
  }
  
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