import { bytesToSize } from '../../utilityFunctions/bytesToSize';

/**
 * Unit tests for the bytesToSize function.
 */
describe('bytesToSize', () => {
  // Test case 1: Convert zero bytes to the literal string
  it('1. should return "0 Bytes" for zero input', () => {
    expect(bytesToSize(0)).toBe('0 Bytes');
  });

  // Test case 2: Format byte values under one kilobyte
  it('2. should format byte values smaller than 1 KB', () => {
    expect(bytesToSize(512)).toBe('512.00 Bytes');
  });

  // Test case 3: Preserve precision for large byte counts still using Bytes unit
  it('3. should handle values just below one kilobyte', () => {
    expect(bytesToSize(1023)).toBe('1023.00 Bytes');
  });

  // Test case 4: Convert exactly one kilobyte
  it('4. should convert 1024 bytes to kilobytes', () => {
    expect(bytesToSize(1024)).toBe('1.00 KB');
  });

  // Test case 5: Convert megabyte values
  it('5. should convert 1048576 bytes to megabytes', () => {
    expect(bytesToSize(1048576)).toBe('1.00 MB');
  });

  // Test case 6: Convert gigabyte values
  it('6. should convert 1073741824 bytes to gigabytes', () => {
    expect(bytesToSize(1073741824)).toBe('1.00 GB');
  });

  // Test case 7: Document behaviour for negative numbers
  it('7. should return "NaN undefined" for negative bytes', () => {
    expect(bytesToSize(-100)).toBe('NaN undefined');
  });

  // Test case 8: Document behaviour for fractional byte counts
  it('8. should return "512.00 undefined" for fractional bytes', () => {
    expect(bytesToSize(0.5)).toBe('512.00 undefined');
  });

  // Test case 9: Document behaviour when input is not a finite number
  it('9. should return "NaN undefined" for NaN input', () => {
    expect(bytesToSize(Number.NaN)).toBe('NaN undefined');
  });

  // Test case 10: Document behaviour beyond the predefined units array
  it('10. should return "1.00 undefined" for values larger than 1 TB', () => {
    expect(bytesToSize(1024 ** 5)).toBe('1.00 undefined');
  });
});
