# GitHub Copilot Instructions for ts-functions-library

## Project Overview

This is a comprehensive TypeScript utility functions library containing 200+ reusable functions organized into 7 specialized modules. The project emphasizes type safety, comprehensive testing, maintainability, and follows TypeScript best practices for enterprise-grade utility libraries.

## Architecture & Structure

### Core Principles

- **Single Responsibility**: Each function should have one clear purpose
- **Type Safety**: Complete type annotations for all functions and parameters
- **Pure Functions**: Prefer pure functions when possible (no side effects)
- **Comprehensive Testing**: Every function must have unit tests with >95% coverage
- **Documentation**: JSDoc comments with examples and complexity notes
- **Error Handling**: Explicit validation with descriptive error messages

### Directory Structure

```
ts-functions-library/
├── .github/                        # GitHub-specific files and workflows
├── arrayFunctions/                 # Array manipulation utilities
│   ├── arrayDifference.ts
│   ├── chunkArray.ts
│   ├── findDuplicates.ts
│   └── ...
├── dateFunctions/                  # Date and time utilities
│   ├── addDays.ts
│   ├── formatDate.ts
│   ├── isLeapYear.ts
│   └── ...
├── encodingFunctions/              # Base64 encoding/decoding
│   ├── encodeBase64.ts
│   └── decodeBase64.ts
├── mathFunctions/                  # Mathematical operations
│   ├── algebraFunctions/           # Powers, roots, logarithms
│   ├── arithmeticFunctions/        # Basic math operations
│   ├── combinatoricsFunctions/     # Factorials, permutations
│   ├── geometricFunctions/         # Shapes, distances, angles
│   ├── numberTheoryFunctions/      # Prime numbers, GCD, LCM
│   ├── sequenceFunctions/          # Fibonacci, triangular numbers
│   └── statisticsFunctions/        # Mean, median, standard deviation
├── objectFunctions/                # Object manipulation utilities
│   ├── deepMerge.ts
│   ├── safeGet.ts
│   ├── groupBy.ts
│   └── ...
├── stringFunctions/                # String processing utilities
│   ├── slugify.ts
│   ├── isValidEmail.ts
│   ├── capitalizeFirstLetter.ts
│   └── ...
├── utilityFunctions/               # General-purpose utilities
│   ├── debounce.ts
│   ├── throttle.ts
│   ├── hexToRgb.ts
│   └── ...
├── functionsUnittests/             # Comprehensive test suites
│   └── [module]Unittests/          # Tests mirroring src structure
└── index.ts                       # Main export file
```

## Development Guidelines

### Function Development Standards

#### 1. Function Structure Template

Every function should follow this template:

```typescript
/**
 * Brief description of what the function does.
 *
 * @param param1 - Description of parameter 1.
 * @param param2 - Description of parameter 2.
 * @param optionalParam - Description of optional parameter (default: false).
 * @returns Description of return value.
 *
 * @throws {TypeError} If parameters are of wrong type.
 * @throws {Error} If parameters have invalid values.
 *
 * @example
 * // Basic usage
 * functionName(42, "hello"); // ExpectedOutput
 *
 * @example
 * // With optional parameter
 * functionName(0, "world", true); // AnotherExpectedOutput
 *
 * @note Any special considerations or implementation details.
 *
 * @complexity Time: O(n), Space: O(1)
 */
export function functionName(
  param1: number,
  param2: string,
  optionalParam: boolean = false,
): ReturnType {
  // Input validation
  if (typeof param1 !== 'number' || isNaN(param1)) {
    throw new TypeError(`param1 must be a number, got ${typeof param1}`);
  }
  if (typeof param2 !== 'string') {
    throw new TypeError(`param2 must be a string, got ${typeof param2}`);
  }
  if (typeof optionalParam !== 'boolean') {
    throw new TypeError(
      `optionalParam must be a boolean, got ${typeof optionalParam}`,
    );
  }

  // Additional validation
  if (param1 < 0) {
    throw new Error('param1 must be non-negative');
  }

  // Function logic here
  const result = performOperation(param1, param2, optionalParam);

  return result;
}
```

#### 2. Input Validation Standards

- **Type Checking**: Validate all input types with `typeof` checks
- **NaN Validation**: Always check for `NaN` when accepting numbers
- **Value Validation**: Check ranges, constraints, and business logic
- **Descriptive Errors**: Include parameter name and expected/actual types
- **Consistent Messages**: Use format: `"param_name must be <expected>, got <actual>"`

#### 3. Error Handling Patterns

```typescript
// Type validation
if (typeof param !== 'number') {
  throw new TypeError(`param must be a number, got ${typeof param}`);
}

// NaN validation for numbers
if (isNaN(param)) {
  throw new Error('param must be a valid number, not NaN');
}

// Value validation
if (param < 0) {
  throw new Error(`param must be non-negative, got ${param}`);
}

// Array validation
if (!Array.isArray(items)) {
  throw new TypeError(`items must be an array, got ${typeof items}`);
}

if (items.length === 0) {
  throw new Error('items array cannot be empty');
}

// Object validation
if (obj === null || typeof obj !== 'object') {
  throw new TypeError('obj must be an object');
}
```

### Interface/Type Development Standards

#### 1. Interface Structure Template

````typescript
/**
 * Interface description explaining its purpose.
 *
 * @example
 * ```typescript
 * const config: FunctionConfig = {
 *   timeout: 5000,
 *   retries: 3,
 *   batchSize: 100
 * };
 * ```
 */
export interface FunctionConfig {
  /** Timeout in milliseconds */
  timeout: number;
  /** Number of retry attempts */
  retries: number;
  /** Batch size for processing */
  batchSize: number;
  /** Optional debug mode */
  debug?: boolean;
}

/**
 * Generic type for callback functions.
 *
 * @template T - Input type
 * @template R - Return type
 */
export type ProcessorCallback<T, R> = (item: T, index: number) => R;

/**
 * Utility type for making specific properties optional.
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
````

#### 2. Generic Function Template

````typescript
/**
 * Generic function that works with multiple types.
 *
 * @template T - The input type
 * @template R - The return type
 * @param items - Array of items to process
 * @param processor - Function to process each item
 * @returns Array of processed results
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3];
 * const doubled = processItems(numbers, x => x * 2);
 * // Result: [2, 4, 6]
 * ```
 */
export function processItems<T, R>(
  items: T[],
  processor: ProcessorCallback<T, R>,
): R[] {
  if (!Array.isArray(items)) {
    throw new TypeError(`items must be an array, got ${typeof items}`);
  }
  if (typeof processor !== 'function') {
    throw new TypeError(
      `processor must be a function, got ${typeof processor}`,
    );
  }

  return items.map((item, index) => processor(item, index));
}
````

### Testing Standards

#### Test File Structure

```typescript
import { functionName } from '../path/to/function';

/**
 * Unit tests for the functionName function.
 */
describe('functionName', () => {
  // Test case 1: Normal/happy path
  it('1. should handle typical input correctly', () => {
    // Arrange
    const input = validInput;
    const expected = expectedOutput;

    // Act
    const result = functionName(input);

    // Assert
    expect(result).toBe(expected);
  });

  // Test case 2: Edge cases
  it('2. should handle edge case with empty array', () => {
    // Arrange
    const input: number[] = [];
    const expected = [];

    // Act
    const result = functionName(input);

    // Assert
    expect(result).toEqual(expected);
  });

  // Test case 3: Error cases
  it('3. should throw TypeError for invalid input type', () => {
    // Arrange
    const input = invalidInput;
    const expectedMessage = 'param must be a number, got string';

    // Act & Assert
    expect(() => functionName(input)).toThrow(TypeError);
    expect(() => functionName(input)).toThrow(expectedMessage);
  });

  // Test case 4: Value validation errors
  it('4. should throw Error for invalid input value', () => {
    // Arrange
    const input = -1;
    const expectedMessage = 'param must be non-negative';

    // Act & Assert
    expect(() => functionName(input)).toThrow(Error);
    expect(() => functionName(input)).toThrow(expectedMessage);
  });

  // Test case 5: Boundary conditions
  it('5. should handle boundary values correctly', () => {
    // Test minimum boundary
    expect(functionName(0)).toBe(expectedMinResult);

    // Test maximum boundary
    expect(functionName(Number.MAX_SAFE_INTEGER)).toBe(expectedMaxResult);
  });

  // Test case 6: Performance/large inputs
  it('6. should handle large inputs efficiently', () => {
    // Arrange
    const largeInput = new Array(10000).fill(0).map((_, i) => i);

    // Act
    const startTime = performance.now();
    const result = functionName(largeInput);
    const endTime = performance.now();

    // Assert
    expect(result).toBeDefined();
    expect(endTime - startTime).toBeLessThan(100); // Should complete within 100ms
  });
});
```

#### Testing Requirements

- **Minimum 6 test cases** per function covering:
  1. Normal/typical usage
  2. Edge cases (empty arrays, zero values, etc.)
  3. Invalid input handling (TypeError)
  4. Value validation errors (Error)
  5. Boundary conditions
  6. Performance considerations (for complex functions)

- **Naming Convention**: Use descriptive test names with numbering: `'1. should...'`
- **Test Structure**: Use Arrange-Act-Assert pattern for clarity
- **Error Testing**: Use `toThrow()` with specific error types and messages
- **Documentation**: Add descriptive comments for each test case explaining the scenario

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

This document serves as a comprehensive guide for maintaining code quality, consistency, and best practices in the ts-functions-library project. It should be updated whenever new patterns, standards, or modules are established in the project.
