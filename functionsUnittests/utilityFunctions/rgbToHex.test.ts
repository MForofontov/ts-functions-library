import { rgbToHex } from '../../utilityFunctions/rgbToHex';

const cases: [{ r: number; g: number; b: number }, string][] = [
  [{ r: 255, g: 87, b: 51 }, '#ff5733'],
  [{ r: 0, g: 0, b: 0 }, '#000000'],
  [{ r: 1, g: 2, b: 3 }, '#010203'],
  [{ r: 16, g: 32, b: 48 }, '#102030'],
  [{ r: 255, g: 255, b: 255 }, '#ffffff'],
  [{ r: -1, g: -20, b: -300 }, '#000000'],
  [{ r: 256, g: 300, b: 999 }, '#ffffff'],
];

describe('rgbToHex', () => {
  test.each(cases)('%#. converts %o to %s', (input, expected) => {
    expect(rgbToHex(input)).toBe(expected);
  });
});
