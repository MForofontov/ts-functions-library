import { rgbToHex } from '../../utilityFunctions/rgbToHex';

describe('rgbToHex', () => {
  // Test case 1: Convert basic RGB values
  it('1. should convert basic RGB values correctly', () => {
    const rgb = { r: 255, g: 87, b: 51 };
    const expected: string = '#ff5733';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 2: Convert white color
  it('2. should convert white color correctly', () => {
    const rgb = { r: 255, g: 255, b: 255 };
    const expected: string = '#ffffff';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 3: Convert black color
  it('3. should convert black color correctly', () => {
    const rgb = { r: 0, g: 0, b: 0 };
    const expected: string = '#000000';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 4: Convert red color
  it('4. should convert red color correctly', () => {
    const rgb = { r: 255, g: 0, b: 0 };
    const expected: string = '#ff0000';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 5: Convert green color
  it('5. should convert green color correctly', () => {
    const rgb = { r: 0, g: 255, b: 0 };
    const expected: string = '#00ff00';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 6: Convert blue color
  it('6. should convert blue color correctly', () => {
    const rgb = { r: 0, g: 0, b: 255 };
    const expected: string = '#0000ff';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 7: Convert RGB with small values
  it('7. should convert RGB with small values correctly', () => {
    const rgb = { r: 1, g: 2, b: 3 };
    const expected: string = '#010203';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 8: Convert RGB with middle-range values
  it('8. should convert RGB with middle-range values correctly', () => {
    const rgb = { r: 128, g: 64, b: 192 };
    const expected: string = '#8040c0';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 9: Convert RGB with single-digit hex values
  it('9. should pad single-digit hex values correctly', () => {
    const rgb = { r: 15, g: 16, b: 17 };
    const expected: string = '#0f1011';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 10: Convert RGB with maximum values
  it('10. should convert RGB with maximum values correctly', () => {
    const rgb = { r: 255, g: 255, b: 255 };
    const expected: string = '#ffffff';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 11: Convert RGB with minimum values
  it('11. should convert RGB with minimum values correctly', () => {
    const rgb = { r: 0, g: 0, b: 0 };
    const expected: string = '#000000';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 12: Convert RGB with mixed high and low values
  it('12. should convert RGB with mixed high and low values correctly', () => {
    const rgb = { r: 255, g: 0, b: 128 };
    const expected: string = '#ff0080';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 13: Convert RGB with equal values
  it('13. should convert RGB with equal values correctly', () => {
    const rgb = { r: 123, g: 123, b: 123 };
    const expected: string = '#7b7b7b';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 14: Convert RGB with all different values
  it('14. should convert RGB with all different values correctly', () => {
    const rgb = { r: 100, g: 150, b: 200 };
    const expected: string = '#6496c8';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 15: Convert RGB with 10 and 16 (single digit hex)
  it('15. should handle values that result in single digit hex correctly', () => {
    const rgb = { r: 10, g: 16, b: 32 };
    const expected: string = '#0a1020';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 16: Convert RGB with decimal values (toString handles as-is)
  it('16. should handle decimal values as-is', () => {
    const rgb = { r: 255.9, g: 87.1, b: 51.5 };
    const expected: string = '#ff.e6666666666857.19999999999833.8';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 17: Convert RGB with large values (toString handles as-is)
  it('17. should handle large values as-is', () => {
    const rgb = { r: 300, g: 87, b: 51 };
    const expected: string = '#12c5733';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });

  // Test case 18: Convert RGB with negative values (toString handles as-is)
  it('18. should handle negative values as-is', () => {
    const rgb = { r: -50, g: 87, b: 51 };
    const expected: string = '#-325733';
    const result: string = rgbToHex(rgb);
    expect(result).toBe(expected);
  });
});