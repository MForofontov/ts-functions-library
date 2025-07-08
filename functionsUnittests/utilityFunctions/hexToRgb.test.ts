import { hexToRgb } from '../../utilityFunctions/hexToRgb';

describe('hexToRgb', () => {
  // Test case 1: Convert valid hex color with hash
  it('1. should convert valid hex color with hash correctly', () => {
    const hex: string = '#ff5733';
    const expected = { r: 255, g: 87, b: 51 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 2: Convert valid hex color without hash
  it('2. should convert valid hex color without hash correctly', () => {
    const hex: string = 'ff5733';
    const expected = { r: 255, g: 87, b: 51 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 3: Convert white color
  it('3. should convert white color correctly', () => {
    const hex: string = '#ffffff';
    const expected = { r: 255, g: 255, b: 255 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 4: Convert black color
  it('4. should convert black color correctly', () => {
    const hex: string = '#000000';
    const expected = { r: 0, g: 0, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 5: Convert red color
  it('5. should convert red color correctly', () => {
    const hex: string = '#ff0000';
    const expected = { r: 255, g: 0, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 6: Convert green color
  it('6. should convert green color correctly', () => {
    const hex: string = '#00ff00';
    const expected = { r: 0, g: 255, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 7: Convert blue color
  it('7. should convert blue color correctly', () => {
    const hex: string = '#0000ff';
    const expected = { r: 0, g: 0, b: 255 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 8: Convert hex with uppercase letters
  it('8. should convert hex with uppercase letters correctly', () => {
    const hex: string = '#FF5733';
    const expected = { r: 255, g: 87, b: 51 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 9: Convert hex with mixed case letters
  it('9. should convert hex with mixed case letters correctly', () => {
    const hex: string = '#FfA500';
    const expected = { r: 255, g: 165, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 10: Return null for invalid hex length (too short)
  it('10. should return null for invalid hex length (too short)', () => {
    const hex: string = '#ff57';
    const result = hexToRgb(hex);
    expect(result).toBeNull();
  });

  // Test case 11: Return null for invalid hex length (too long)
  it('11. should return null for invalid hex length (too long)', () => {
    const hex: string = '#ff57337';
    const result = hexToRgb(hex);
    expect(result).toBeNull();
  });

  // Test case 12: Return null for empty string
  it('12. should return null for empty string', () => {
    const hex: string = '';
    const result = hexToRgb(hex);
    expect(result).toBeNull();
  });

  // Test case 13: Return black color for invalid characters (parseInt returns NaN, bitwise operations convert to 0)
  it('13. should return black color for invalid characters', () => {
    const hex: string = '#gggggg';
    const expected = { r: 0, g: 0, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 14: Return null for only hash symbol
  it('14. should return null for only hash symbol', () => {
    const hex: string = '#';
    const result = hexToRgb(hex);
    expect(result).toBeNull();
  });

  // Test case 15: Convert hex with all zeros
  it('15. should convert hex with all zeros correctly', () => {
    const hex: string = '000000';
    const expected = { r: 0, g: 0, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 16: Convert hex with all Fs
  it('16. should convert hex with all Fs correctly', () => {
    const hex: string = 'FFFFFF';
    const expected = { r: 255, g: 255, b: 255 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 17: Convert hex with numbers only
  it('17. should convert hex with numbers only correctly', () => {
    const hex: string = '123456';
    const expected = { r: 18, g: 52, b: 86 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });

  // Test case 18: Return black color for special characters (parseInt returns NaN, bitwise operations convert to 0)
  it('18. should return black color for special characters', () => {
    const hex: string = '#!@#$%^';
    const expected = { r: 0, g: 0, b: 0 };
    const result = hexToRgb(hex);
    expect(result).toEqual(expected);
  });
});