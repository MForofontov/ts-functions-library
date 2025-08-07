import { hexToRgb } from '../../utilityFunctions/hexToRgb';

describe('hexToRgb', () => {
  // Test case 1: Convert hex with hash prefix
  it('1. should convert hex with hash prefix', () => {
    expect(hexToRgb('#ff5733')).toEqual({ r: 255, g: 87, b: 51 });
  });

  // Test case 2: Convert hex without hash
  it('2. should convert hex without hash', () => {
    expect(hexToRgb('ff5733')).toEqual({ r: 255, g: 87, b: 51 });
  });

  // Test case 3: Convert black hex value
  it('3. should convert black hex value', () => {
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  // Test case 4: Convert mixed hex value
  it('4. should convert mixed hex value', () => {
    expect(hexToRgb('#00ff0f')).toEqual({ r: 0, g: 255, b: 15 });
  });

  // Test case 5: Return null for invalid hex
  it('5. should return null for invalid hex', () => {
    expect(hexToRgb('#123')).toBeNull();
  });
});
