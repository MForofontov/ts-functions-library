import { joinURLPaths } from '../../networkFunctions/joinURLPaths';

/**
 * Unit tests for the joinURLPaths function.
 */
describe('joinURLPaths', () => {
  it('1. should join basic path segments', () => {
    const result = joinURLPaths('/api', 'users', '123');
    expect(result).toBe('/api/users/123');
  });

  it('2. should handle trailing slashes', () => {
    const result = joinURLPaths('/api/', 'users/', '123/');
    expect(result).toBe('/api/users/123');
  });

  it('3. should handle leading slashes', () => {
    const result = joinURLPaths('/api', '/users', '/123');
    expect(result).toBe('/api/users/123');
  });

  it('4. should handle both leading and trailing slashes', () => {
    const result = joinURLPaths('/api/', '/users/', '/123/');
    expect(result).toBe('/api/users/123');
  });

  it('5. should handle relative paths', () => {
    const result = joinURLPaths('api', 'users', '123');
    expect(result).toBe('api/users/123');
  });

  it('6. should preserve leading slash from first segment', () => {
    const result = joinURLPaths('/api', 'users');
    expect(result).toBe('/api/users');
  });

  it('7. should not add leading slash if first segment is relative', () => {
    const result = joinURLPaths('api', 'users');
    expect(result).toBe('api/users');
  });

  it('8. should handle single segment', () => {
    const result = joinURLPaths('/api');
    expect(result).toBe('/api');
  });

  it('9. should handle empty strings in segments', () => {
    const result = joinURLPaths('/api', '', 'users');
    expect(result).toBe('/api/users');
  });

  it('10. should throw Error when no segments provided', () => {
    expect(() => joinURLPaths()).toThrow(Error);
    expect(() => joinURLPaths()).toThrow(
      'At least one path segment is required',
    );
  });

  it('11. should throw TypeError for non-string segment', () => {
    const segment = 123 as unknown as string;
    expect(() => joinURLPaths('/api', segment, 'users')).toThrow(TypeError);
    expect(() => joinURLPaths('/api', segment, 'users')).toThrow(
      'All paths must be strings',
    );
  });

  it('12. should handle multiple consecutive slashes', () => {
    const result = joinURLPaths('/api//', '//users//', '//123');
    expect(result).toBe('/api/users/123');
  });

  it('13. should handle complex nested paths', () => {
    const result = joinURLPaths(
      '/api',
      'v2',
      'resources',
      'users',
      '123',
      'profile',
    );
    expect(result).toBe('/api/v2/resources/users/123/profile');
  });

  it('14. should handle path with dots', () => {
    const result = joinURLPaths('/api', 'v1.0', 'users');
    expect(result).toBe('/api/v1.0/users');
  });

  it('15. should handle path with dashes and underscores', () => {
    const result = joinURLPaths('/api', 'user-profile', 'get_data');
    expect(result).toBe('/api/user-profile/get_data');
  });

  it('16. should handle two segments', () => {
    const result = joinURLPaths('api', 'users');
    expect(result).toBe('api/users');
  });

  it('17. should handle all empty segments except first', () => {
    const result = joinURLPaths('/api', '', '', '');
    expect(result).toBe('/api');
  });

  it('18. should handle mixed relative and absolute-like segments', () => {
    const result = joinURLPaths('api', '/users/', 'profile/');
    expect(result).toBe('api/users/profile');
  });

  it('19. should handle single character segments', () => {
    const result = joinURLPaths('/a', 'b', 'c');
    expect(result).toBe('/a/b/c');
  });

  it('20. should handle segments with special characters', () => {
    const result = joinURLPaths('/api', 'user-name', 'file.json');
    expect(result).toBe('/api/user-name/file.json');
  });
});
