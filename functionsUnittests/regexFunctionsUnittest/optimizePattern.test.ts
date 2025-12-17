import { optimizePattern } from '../../regexFunctions/optimizePattern';

/**
 * Unit tests for the optimizePattern function.
 */
describe('optimizePattern', () => {
  // Patterns that can be optimized
  it('1. should detect unnecessary capturing groups', () => {
    const result = optimizePattern(/^(test)$/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions).toContain(
      'Replace capturing groups with non-capturing groups (?:...) if captures are not needed',
    );
  });

  it('2. should suggest combining repeated character classes', () => {
    const result = optimizePattern(/[a-z][a-z][a-z]/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions).toContain(
      'Combine repeated character classes with quantifiers',
    );
  });

  it('3. should detect redundant dot-star at start', () => {
    const result = optimizePattern(/^.*test/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions).toContain('Remove redundant ^.* or .*$ anchors');
  });

  it('4. should detect redundant dot-star at end', () => {
    const result = optimizePattern(/test.*$/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions).toContain('Remove redundant ^.* or .*$ anchors');
  });

  it('5. should suggest lazy quantifiers', () => {
    const result = optimizePattern(/<.*>/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions).toContain(
      'Consider using lazy quantifiers (.*?) instead of greedy (.*) where appropriate',
    );
  });

  it('6. should suggest char class for simple alternatives', () => {
    const result = optimizePattern(/a|b|c/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions).toContain(
      'Replace simple alternations with character classes: (a|b|c) → [abc]',
    );
  });

  it('7. should provide optimized pattern for multiple issues', () => {
    const result = optimizePattern(/^(a|b|c).*$/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions.length).toBeGreaterThan(0);
    expect(result.optimizedPattern).toBeDefined();
  });

  // Patterns that are already optimized
  it('8. should return false for already optimized pattern', () => {
    const result = optimizePattern(/^test$/);
    expect(result.canOptimize).toBe(false);
    expect(result.suggestions).toEqual([]);
    expect(result.optimizedPattern).toBeUndefined();
  });

  it('9. should return false for simple character class', () => {
    const result = optimizePattern(/[a-z]+/);
    expect(result.canOptimize).toBe(false);
  });

  it('10. should return false for non-capturing groups', () => {
    const result = optimizePattern(/(?:test)+/);
    expect(result.canOptimize).toBe(false);
  });

  it('11. should return false for efficient email pattern', () => {
    const result = optimizePattern(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    expect(result.canOptimize).toBe(false);
  });

  // Edge cases
  it('12. should handle complex patterns with multiple optimizations', () => {
    const result = optimizePattern(/^.*(a|b|c)(d|e|f).*$/);
    expect(result.canOptimize).toBe(true);
    expect(result.suggestions.length).toBeGreaterThanOrEqual(2);
  });

  it('13. should handle pattern with named groups', () => {
    const result = optimizePattern(/(?<name>[a-z]+)/);
    // Named groups are intentional, so might not suggest optimization
    expect(result).toHaveProperty('canOptimize');
    expect(result).toHaveProperty('suggestions');
  });

  // Error cases
  it('14. should throw TypeError when pattern is not a RegExp', () => {
    expect(() => optimizePattern('invalid' as any)).toThrow(TypeError);
    expect(() => optimizePattern('invalid' as any)).toThrow(
      'pattern must be a RegExp',
    );
  });

  it('15. should throw TypeError when pattern is null', () => {
    expect(() => optimizePattern(null as any)).toThrow(TypeError);
    expect(() => optimizePattern(null as any)).toThrow(
      'pattern must be a RegExp',
    );
  });

  it('16. should throw TypeError when pattern is undefined', () => {
    expect(() => optimizePattern(undefined as any)).toThrow(TypeError);
    expect(() => optimizePattern(undefined as any)).toThrow(
      'pattern must be a RegExp',
    );
  });
});
