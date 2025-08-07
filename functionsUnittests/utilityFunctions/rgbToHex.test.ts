import { rgbToHex } from '../../utilityFunctions/rgbToHex';

describe('rgbToHex', () => {
  const cases: [{ r: number; g: number; b: number }, string][] = [
    [{ r: 255, g: 87, b: 51 }, '#ff5733'],
    [{ r: 0, g: 0, b: 0 }, '#000000'],
    [{ r: 1, g: 2, b: 3 }, '#010203'],
    [{ r: 16, g: 32, b: 48 }, '#102030'],
    [{ r: 255, g: 255, b: 255 }, '#ffffff'],
  ];

  test.each(cases)('%#. converts %o to %s', (input, expected) => {
    expect(rgbToHex(input)).toBe(expected);
  });
});
