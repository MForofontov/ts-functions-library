import { bytesToSize } from '../../utilityFunctions/bytesToSize';

describe('bytesToSize', () => {
  const cases: [number, string][] = [
    [0, '0 Bytes'],
    [512, '512.00 Bytes'],
    [1023, '1023.00 Bytes'],
    [1024, '1.00 KB'],
    [1048576, '1.00 MB'],
    [1073741824, '1.00 GB'],
  ];

  test.each(cases)('%#. converts %i bytes', (input, expected) => {
    expect(bytesToSize(input)).toBe(expected);
  });
});
