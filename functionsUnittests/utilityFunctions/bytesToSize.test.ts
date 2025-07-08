import { bytesToSize } from '../../utilityFunctions/bytesToSize';

describe('bytesToSize', () => {
  // Test case 1: Convert 0 bytes
  it('1. should return "0 Bytes" for 0 bytes', () => {
    const bytes: number = 0;
    const expected: string = '0 Bytes';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 2: Convert 1 byte
  it('2. should return "1.00 Bytes" for 1 byte', () => {
    const bytes: number = 1;
    const expected: string = '1.00 Bytes';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 3: Convert 1024 bytes to KB
  it('3. should return "1.00 KB" for 1024 bytes', () => {
    const bytes: number = 1024;
    const expected: string = '1.00 KB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 4: Convert 1048576 bytes to MB
  it('4. should return "1.00 MB" for 1048576 bytes', () => {
    const bytes: number = 1048576;
    const expected: string = '1.00 MB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 5: Convert 1073741824 bytes to GB
  it('5. should return "1.00 GB" for 1073741824 bytes', () => {
    const bytes: number = 1073741824;
    const expected: string = '1.00 GB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 6: Convert 1099511627776 bytes to TB
  it('6. should return "1.00 TB" for 1099511627776 bytes', () => {
    const bytes: number = 1099511627776;
    const expected: string = '1.00 TB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 7: Convert 1536 bytes
  it('7. should return "1.50 KB" for 1536 bytes', () => {
    const bytes: number = 1536;
    const expected: string = '1.50 KB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 8: Convert 2097152 bytes
  it('8. should return "2.00 MB" for 2097152 bytes', () => {
    const bytes: number = 2097152;
    const expected: string = '2.00 MB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 9: Convert 512 bytes
  it('9. should return "512.00 Bytes" for 512 bytes', () => {
    const bytes: number = 512;
    const expected: string = '512.00 Bytes';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 10: Convert very small fraction
  it('10. should handle fractional bytes correctly', () => {
    const bytes: number = 1023;
    const expected: string = '1023.00 Bytes';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 11: Convert large TB value
  it('11. should handle very large values correctly', () => {
    const bytes: number = 5497558138880;
    const expected: string = '5.00 TB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });

  // Test case 12: Convert decimal result
  it('12. should format decimal results correctly', () => {
    const bytes: number = 1572864;
    const expected: string = '1.50 MB';
    const result: string = bytesToSize(bytes);
    expect(result).toBe(expected);
  });
});