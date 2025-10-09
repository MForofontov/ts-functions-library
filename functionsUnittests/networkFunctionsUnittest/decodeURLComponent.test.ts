import { decodeURLComponent } from '../../networkFunctions/decodeURLComponent';

/**
 * Unit tests for the decodeURLComponent function.
 */
describe('decodeURLComponent', () => {
  it('1. should decode basic encoded string', () => {
    const result = decodeURLComponent('hello%20world');
    expect(result).toBe('hello world');
  });

  it('2. should decode special characters', () => {
    const result = decodeURLComponent('hello%21world');
    expect(result).toBe('hello!world');
  });

  it('3. should decode parentheses', () => {
    const result = decodeURLComponent('hello%28world%29');
    expect(result).toBe('hello(world)');
  });

  it('4. should decode single quotes', () => {
    const result = decodeURLComponent('hello%27world');
    expect(result).toBe("hello'world");
  });

  it('5. should decode asterisks', () => {
    const result = decodeURLComponent('hello%2Aworld');
    expect(result).toBe('hello*world');
  });

  it('6. should not modify unencoded string', () => {
    const result = decodeURLComponent('hello-world_test.value~123');
    expect(result).toBe('hello-world_test.value~123');
  });

  it('7. should decode multiple special characters', () => {
    const result = decodeURLComponent(
      'hello%20world%21%20%28it%27s%20great%29%2A',
    );
    expect(result).toBe("hello world! (it's great)*");
  });

  it('8. should handle empty string', () => {
    const result = decodeURLComponent('');
    expect(result).toBe('');
  });

  it('9. should throw TypeError for non-string input', () => {
    const input = 123 as unknown as string;
    expect(() => decodeURLComponent(input)).toThrow(TypeError);
    expect(() => decodeURLComponent(input)).toThrow('str must be a string');
  });

  it('10. should decode slashes', () => {
    const result = decodeURLComponent('path%2Fto%2Ffile');
    expect(result).toBe('path/to/file');
  });

  it('11. should decode equals signs', () => {
    const result = decodeURLComponent('key%3Dvalue');
    expect(result).toBe('key=value');
  });

  it('12. should decode ampersands', () => {
    const result = decodeURLComponent('key1%26key2');
    expect(result).toBe('key1&key2');
  });

  it('13. should decode Unicode characters', () => {
    const result = decodeURLComponent('hello%20%E4%B8%96%E7%95%8C');
    expect(result).toBe('hello 世界');
  });

  it('14. should decode emoji', () => {
    const result = decodeURLComponent('hello%20%F0%9F%98%80');
    expect(result).toBe('hello 😀');
  });

  it('15. should decode percent signs', () => {
    const result = decodeURLComponent('100%25');
    expect(result).toBe('100%');
  });

  it('16. should decode hash symbols', () => {
    const result = decodeURLComponent('%23section');
    expect(result).toBe('#section');
  });

  it('17. should decode at symbols', () => {
    const result = decodeURLComponent('user%40domain');
    expect(result).toBe('user@domain');
  });

  it('18. should decode plus signs', () => {
    const result = decodeURLComponent('1%2B1%3D2');
    expect(result).toBe('1+1=2');
  });

  it('19. should handle malformed encoded string gracefully', () => {
    const result = decodeURLComponent('hello%world');
    expect(result).toBe('hello%world');
  });

  it('20. should return original string on decode error', () => {
    const malformed = 'test%E0%A4%A';
    const result = decodeURLComponent(malformed);
    expect(result).toBe(malformed);
  });
});
