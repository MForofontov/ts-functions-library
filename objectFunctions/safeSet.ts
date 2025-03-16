
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