/**
 * Common test objects for various testing scenarios.
 */
export const MOCK_OBJECTS = {
  simple: { key1: 'value1', key2: 'value2' },
  nested: { outer: { inner: { deep: 'value' } } },
  withArrays: { items: [1, 2, 3], names: ['a', 'b', 'c'] },
  mixed: { str: 'text', num: 42, bool: true, arr: [1, 2], obj: { a: 1 } },
  empty: {},
};
