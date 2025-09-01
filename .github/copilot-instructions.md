# GitHub Copilot Instructions for ts-functions-library

## Project Overview

This is a comprehensive TypeScript utility functions library that provides reusable, well-tested functions organized by category. The project emphasizes type safety, comprehensive testing, and maintainable code structure.

## Architecture & Structure

### Core Principles
- **Single Responsibility**: Each function should have one clear purpose
- **Type Safety**: Leverage TypeScript's type system for better code reliability
- **Pure Functions**: Functions should be pure when possible (no side effects)
- **Comprehensive Testing**: Every function must have unit tests
- **Documentation**: Clear JSDoc comments with examples and complexity notes

### Directory Structure
```
ts-functions-library/
├── .github/                     # GitHub-specific files
├── arrayFunctions/              # Array manipulation utilities
├── dateFunctions/              # Date and time utilities
├── encodingFunctions/          # Base64 encoding/decoding
├── mathFunctions/              # Mathematical operations
│   ├── algebraFunctions/       # Powers, roots, logarithms
│   ├── arithmeticFunctions/    # Basic math operations
│   ├── combinatoricsFunctions/ # Factorials, permutations
│   ├── geometricFunctions/     # Shapes, distances, angles
│   ├── numberTheoryFunctions/  # Prime numbers, GCD, LCM
│   ├── sequenceFunctions/      # Fibonacci, triangular numbers
│   └── statisticsFunctions/    # Mean, median, standard deviation
├── objectFunctions/            # Object manipulation utilities
├── stringFunctions/            # String processing utilities
├── utilityFunctions/           # General-purpose utilities
├── functionsUnittests/         # Comprehensive test suites
└── index.ts                    # Main export file
```

## Development Guidelines

### Function Development Standards

#### 1. Function Structure
Every function should follow this template:
```typescript
/**
 * [Brief description of what the function does]
 *
 * @param paramName - Description of parameter
 * @returns Description of return value
 *
 * @example
 * // Usage example
 * functionName(input); // expected output
 *
 * @note Any special considerations or implementation details
 *
 * @complexity Time/space complexity notation
 */
export function functionName(param: Type): ReturnType {
  // Input validation (when appropriate)
  if (invalidCondition) {
    throw new Error('Descriptive error message');
  }
  
  // Function logic
  return result;
}
```

#### 2. Input Validation
- Validate inputs when necessary (especially for edge cases)
- Throw descriptive errors for invalid inputs
- Use TypeScript types as the first line of defense
- Handle `NaN`, `null`, `undefined` appropriately

#### 3. Error Handling
- Use specific error messages that help developers understand the problem
- Prefer throwing errors over returning `null` or `undefined` for invalid inputs
- Document expected errors in JSDoc comments

### Testing Standards

#### Test File Structure
```typescript
import { functionName } from '../path/to/function';

describe('functionName', () => {
  // Test case 1: Normal/happy path
  it('1. should handle typical input correctly', () => {
    const input = validInput;
    const expected = expectedOutput;
    const result = functionName(input);
    expect(result).toBe(expected);
  });

  // Test case 2: Edge cases
  it('2. should handle edge case', () => {
    // Test implementation
  });

  // Test case 3: Error cases
  it('3. should throw error for invalid input', () => {
    const input = invalidInput;
    expect(() => functionName(input)).toThrow('Expected error message');
  });
});
```

#### Testing Requirements
- **Minimum 6 test cases** per function covering:
  1. Normal/typical usage
  2. Edge cases (empty arrays, zero values, etc.)
  3. Invalid input handling
  4. Boundary conditions
  5. Type-specific scenarios
  6. Performance considerations (for complex functions)

- Use descriptive test names with numbering: `'1. should...'`
- Test both success and failure paths
- Verify exact error messages
- Use appropriate Jest matchers (`toBe`, `toEqual`, `toThrow`, etc.)

### Code Style & Formatting

#### TypeScript Configuration
- Target: ES2023
- Strict mode enabled
- Declaration files generated
- Node.js and Jest types included

#### ESLint Rules (Key Points)
- **Prettier integration**: All formatting handled by Prettier
- **Type safety**: Warn on `any` usage, unsafe type operations
- **Code quality**: Warn on unused variables, console usage
- **Import consistency**: Use ES modules, type-only imports when appropriate
- **Interface over type**: Prefer `interface` for object type definitions

#### Formatting Standards
- **Single quotes** for strings
- **2-space indentation**
- **No console.log** in production code (warnings allowed)
- **Consistent naming**: camelCase for functions and variables

### Export Strategy

#### Index.ts Management
All functions must be exported from the main `index.ts` file:
```typescript
export * from './categoryFunctions/functionName';
```

#### Naming Conflicts
Handle naming conflicts explicitly:
```typescript
export { groupBy as groupByObject } from './objectFunctions/groupBy';
```

### Mathematical Functions Specific Guidelines

#### Organization by Subdomain
- **arithmeticFunctions/**: Basic operations (add, subtract, absolute, rounding)
- **algebraFunctions/**: Powers, roots, logarithms, exponentials  
- **geometricFunctions/**: Area, volume, distance, trigonometry
- **statisticsFunctions/**: Mean, median, variance, standard deviation
- **numberTheoryFunctions/**: Primes, GCD, LCM, divisibility
- **combinatoricsFunctions/**: Factorials, permutations, combinations
- **sequenceFunctions/**: Fibonacci, triangular numbers, sequences

#### Mathematical Function Requirements
- Include **@complexity** annotation
- Validate numeric inputs (check for `NaN`)
- Handle mathematical edge cases (division by zero, negative square roots)
- Use appropriate precision for floating-point operations
- Reference mathematical definitions in comments when helpful

### Best Practices for GitHub Copilot

#### When Adding New Functions
1. **Analyze the category**: Determine the correct directory based on function purpose
2. **Follow naming conventions**: Use descriptive, camelCase names
3. **Check for duplicates**: Ensure similar functionality doesn't already exist
4. **Consider edge cases**: Think about boundary conditions and error scenarios
5. **Add comprehensive tests**: Create test file in corresponding `functionsUnittests` directory
6. **Update exports**: Add export statement to `index.ts`

#### When Adding New Modules/Categories
1. **Create new directory** following the naming convention (e.g., `categoryFunctions/`)
2. **Create corresponding test directory** in `functionsUnittests/categoryFunctionsUnittest/`
3. **Update this document** (`.github/copilot-instructions.md`) to include the new module in:
   - Directory Structure section
   - Any relevant guidelines specific to the new category
4. **Consider organizational impact**: Ensure the new category is distinct and doesn't overlap with existing ones

#### When Modifying Existing Functions
1. **Maintain backward compatibility** unless it's a breaking change
2. **Update tests** to reflect changes
3. **Consider performance implications** of modifications
4. **Update JSDoc** if behavior changes
5. **Run full test suite** to ensure no regressions

#### Code Review Considerations
- **Type safety**: Ensure proper TypeScript usage
- **Test coverage**: Verify comprehensive test scenarios
- **Documentation**: Check JSDoc completeness and accuracy
- **Performance**: Consider algorithmic efficiency
- **Consistency**: Ensure code follows project patterns

### Common Patterns in the Codebase

#### Input Validation Pattern
```typescript
if (isNaN(input)) {
  throw new Error('Input must be a number');
}
```

#### Array Processing Pattern
```typescript
if (!Array.isArray(arr) || arr.length === 0) {
  throw new Error('Input must be a non-empty array');
}
```

#### Object Handling Pattern
```typescript
if (obj === null || typeof obj !== 'object') {
  throw new Error('Input must be an object');
}
```

#### Type Guard Pattern
```typescript
function isValidType(value: unknown): value is ExpectedType {
  return typeof value === 'expectedType' && /* additional checks */;
}
```

### Environment & Dependencies

#### Development Environment
- **Node.js**: Version 20 or later required
- **TypeScript**: Latest stable version
- **Jest**: For testing with Allure reporting
- **ESLint + Prettier**: For code quality and formatting

#### Key Dependencies
- **Jest & ts-jest**: Testing framework
- **Allure**: Test reporting
- **TypeScript**: Language and compiler
- **ESLint ecosystem**: Code quality tools

#### Build Process
- **Build command**: `npm run build` (compiles to `dist/`)
- **Test command**: `npm test` (runs tests with Allure reporting)
- **Format command**: `npm run format` (Prettier formatting)
- **Lint command**: `npm run lint` (ESLint checking)

### Performance Considerations

#### Algorithmic Complexity
- Document time/space complexity in JSDoc
- Prefer O(1) or O(n) algorithms when possible
- Consider memory usage for large data sets
- Optimize hot paths in commonly used functions

#### Runtime Efficiency
- Avoid unnecessary object creation
- Use appropriate data structures
- Consider memoization for expensive calculations
- Profile performance-critical functions

This document serves as a comprehensive guide for maintaining code quality, consistency, and best practices in the ts-functions-library project.
