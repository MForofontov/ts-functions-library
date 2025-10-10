import { isValidTime } from '../../validationFunctions/isValidTime';

/**
 * Unit tests for the isValidTime function.
 */
describe('isValidTime', () => {
  // Test case 1: Valid 24-hour format times
  it('1. should return true for valid 24-hour format times', () => {
    expect(isValidTime('14:30')).toBe(true);
    expect(isValidTime('14:30:45')).toBe(true);
    expect(isValidTime('00:00')).toBe(true);
    expect(isValidTime('23:59:59')).toBe(true);
    expect(isValidTime('9:05')).toBe(true);
    expect(isValidTime('09:05:00')).toBe(true);
  });

  // Test case 2: Invalid 24-hour format times
  it('2. should return false for invalid 24-hour format times', () => {
    expect(isValidTime('25:00')).toBe(false);
    expect(isValidTime('14:60')).toBe(false);
    expect(isValidTime('14:30:60')).toBe(false);
    expect(isValidTime('14:30:45', false)).toBe(false);
    expect(isValidTime('24:00')).toBe(false);
    expect(isValidTime('14')).toBe(false);
  });

  // Test case 3: Valid 12-hour format times
  it('3. should return true for valid 12-hour format times', () => {
    expect(isValidTime('2:30 PM', true, false)).toBe(true);
    expect(isValidTime('12:30:45 AM', true, false)).toBe(true);
    expect(isValidTime('11:59 PM', true, false)).toBe(true);
    expect(isValidTime('1:00 AM', true, false)).toBe(true);
  });

  // Test case 4: Invalid 12-hour format times
  it('4. should return false for invalid 12-hour format times', () => {
    expect(isValidTime('2:30', true, false)).toBe(false);
    expect(isValidTime('13:30 PM', true, false)).toBe(false);
    expect(isValidTime('0:30 AM', true, false)).toBe(false);
    expect(isValidTime('12:60 PM', true, false)).toBe(false);
  });

  // Test case 5: Performance with various time strings
  it('5. should validate time strings efficiently', () => {
    const timeStrings = ['14:30', '25:00', '2:30 PM', '12:30:45 AM', 'invalid'];

    const startTime = performance.now();
    const results = timeStrings.map((time, index) => {
      if (index === 2 || index === 3) {
        return isValidTime(time, true, false);
      }
      return isValidTime(time);
    });
    const endTime = performance.now();

    expect(results).toEqual([true, false, true, true, false]);
    expect(endTime - startTime).toBeLessThan(10);
  });

  // Test case 6: TypeError for invalid input types
  it('6. should throw TypeError for invalid input types', () => {
    const invalidInputs = [123, null, undefined, [], {}, true];

    invalidInputs.forEach((input) => {
      expect(() => isValidTime(input as unknown as string)).toThrow(TypeError);
    });
  });

});
