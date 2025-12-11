/**
 * Common test arrays for various testing scenarios.
 */
export const MOCK_ARRAYS = {
  numbers: {
    small: [1, 2, 3, 4, 5],
    withNegatives: [-5, -3, 0, 3, 5],
    withDecimals: [1.5, 2.7, 3.14, 4.9],
    withDuplicates: [1, 2, 2, 3, 3, 3, 4],
    large: Array.from({ length: 1000 }, (_, i) => i),
  },
  strings: {
    simple: ['apple', 'banana', 'cherry'],
    mixed: ['Hello', 'world', '123', 'Test'],
    empty: [],
    withEmpty: ['', 'test', '', 'value'],
  },
  objects: {
    simple: [{ id: 1 }, { id: 2 }, { id: 3 }],
    nested: [
      { id: 1, data: { value: 'a' } },
      { id: 2, data: { value: 'b' } },
    ],
  },
};
