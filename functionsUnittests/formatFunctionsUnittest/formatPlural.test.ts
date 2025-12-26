import { formatPlural } from '../../formatFunctions/formatPlural';

/**
 * Unit tests for the formatPlural function.
 */
describe('formatPlural', () => {
  // Test case 1: Basic singular
  it('1. should return singular form for count 1', () => {
    // Arrange
    const word = 'item';
    const count = 1;
    const expected = 'item';

    // Act
    const result = formatPlural(word, count);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 2: Basic plural with 's'
  it('2. should add s for plural', () => {
    // Arrange
    const word = 'item';
    const count = 2;
    const expected = 'items';

    // Act
    const result = formatPlural(word, count);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 3: Custom plural form
  it('3. should use custom plural form', () => {
    // Arrange
    const word = 'person';
    const count = 3;
    const pluralForm = 'people';
    const expected = 'people';

    // Act
    const result = formatPlural(word, count, pluralForm);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 4: Include count (singular)
  it('4. should include count with singular form', () => {
    // Arrange
    const word = 'item';
    const count = 1;
    const expected = '1 item';

    // Act
    const result = formatPlural(word, count, undefined, true);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 5: Include count (plural)
  it('5. should include count with plural form', () => {
    // Arrange
    const word = 'item';
    const count = 5;
    const expected = '5 items';

    // Act
    const result = formatPlural(word, count, undefined, true);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 6: Zero count (plural)
  it('6. should return plural for zero count', () => {
    // Arrange
    const word = 'item';
    const count = 0;
    const expected = 'items';

    // Act
    const result = formatPlural(word, count);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 7: Large count
  it('7. should handle large counts', () => {
    // Arrange
    const word = 'item';
    const count = 1000;
    const expected = '1000 items';

    // Act
    const result = formatPlural(word, count, undefined, true);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 8: Negative count
  it('8. should handle negative counts as plural', () => {
    // Arrange
    const word = 'item';
    const count = -1;
    const expected = 'items';

    // Act
    const result = formatPlural(word, count);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 9: Custom plural with count
  it('9. should use custom plural with count', () => {
    // Arrange
    const word = 'child';
    const count = 3;
    const pluralForm = 'children';
    const expected = '3 children';

    // Act
    const result = formatPlural(word, count, pluralForm, true);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 10: Empty word
  it('10. should handle empty word string', () => {
    // Arrange
    const word = '';
    const count = 2;
    const expected = 's';

    // Act
    const result = formatPlural(word, count);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 11: Throw TypeError for non-string word
  it('11. should throw TypeError when word is not a string', () => {
    // Arrange
    const word = 123 as unknown as string;
    const count = 2;

    // Act & Assert
    expect(() => formatPlural(word, count)).toThrow(TypeError);
    expect(() => formatPlural(word, count)).toThrow('word must be a string');
  });

  // Test case 12: Throw TypeError for non-number count
  it('12. should throw TypeError when count is not a number', () => {
    // Arrange
    const word = 'item';
    const count = 'two' as unknown as number;

    // Act & Assert
    expect(() => formatPlural(word, count)).toThrow(TypeError);
    expect(() => formatPlural(word, count)).toThrow('count must be a number');
  });

  // Test case 13: Throw TypeError for NaN count
  it('13. should throw TypeError when count is NaN', () => {
    // Arrange
    const word = 'item';
    const count = NaN;

    // Act & Assert
    expect(() => formatPlural(word, count)).toThrow(TypeError);
    expect(() => formatPlural(word, count)).toThrow('count must be a number');
  });

  // Test case 14: Throw TypeError for non-integer count
  it('14. should throw TypeError when count is not an integer', () => {
    // Arrange
    const word = 'item';
    const count = 1.5;

    // Act & Assert
    expect(() => formatPlural(word, count)).toThrow(TypeError);
    expect(() => formatPlural(word, count)).toThrow('count must be an integer');
  });
});
