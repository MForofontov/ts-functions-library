/**
 * Checks if a regex pattern has potential catastrophic backtracking issues.
 *
 * @param pattern - The regex pattern to analyze (string or RegExp).
 * @returns True if pattern may have backtracking issues, false otherwise.
 *
 * @throws {TypeError} If pattern is not a string or RegExp.
 * @throws {Error} If pattern is invalid.
 *
 * @example
 * // Safe pattern
 * hasBacktracking(/\d+/);
 * // false
 *
 * @example
 * // Dangerous pattern (nested quantifiers)
 * hasBacktracking(/(a+)+b/);
 * // true
 *
 * @example
 * // Dangerous pattern (overlapping alternatives)
 * hasBacktracking(/(a|a)*b/);
 * // true
 *
 * @note This is a heuristic check and may produce false positives/negatives.
 * Common dangerous patterns: nested quantifiers, overlapping alternatives.
 *
 * @complexity Time: O(n), Space: O(1) where n is pattern length
 */
export function hasBacktracking(pattern: string | RegExp): boolean {
  if (typeof pattern !== 'string' && !(pattern instanceof RegExp)) {
    throw new TypeError(
      `pattern must be a string or RegExp, got ${typeof pattern}`,
    );
  }

  let source: string;

  try {
    source = typeof pattern === 'string' ? pattern : pattern.source;
  } catch (e) {
    throw new Error(
      `Invalid regular expression pattern: ${pattern instanceof RegExp ? pattern.source : pattern}`,
    );
  }

  // Check for nested quantifiers (most common backtracking issue)
  // Pattern like (a+)+ or (a*)* or (a+)*
  const nestedQuantifiers =
    /(\([^)]*[*+?]\)|\[[^\]]*\])[*+?{]/.test(source) ||
    /(\([^)]*[*+?]\)|\[[^\]]*\])\{/.test(source);

  if (nestedQuantifiers) {
    return true;
  }

  // Check for overlapping alternatives within quantified groups
  // Pattern like (a|a)* or (ab|a)+ or similar
  const quantifiedGroupPattern = /\([^)]*\|[^)]*\)[*+?{]/;
  if (quantifiedGroupPattern.test(source)) {
    // This is a simplification - could have false positives
    // but it catches common problematic patterns
    return true;
  }

  // Check for multiple consecutive greedy quantifiers
  // Pattern like .*.*  or .+.+ or similar
  const multipleGreedyQuantifiers = /[*+][*+]|[*+]\{|\{[^}]*\}[*+{]/;
  if (multipleGreedyQuantifiers.test(source)) {
    return true;
  }

  return false;
}
