/**
 * Testing Utilities Index
 *
 * Exports all testing helper functions and random data generators for streamlined test development.
 *
 * @module testingUtilities
 */

// Helper functions
export {
  runPerformanceTest,
  type PerformanceTestResult,
} from './runPerformanceTest';
export { testInvalidTypes } from './testInvalidTypes';
export { generateRange } from './generateRange';
export { generateTestArray } from './generateTestArray';
export { getBoundaryValues, type BoundaryValues } from './getBoundaryValues';
export { getCommonInvalidInputs } from './getCommonInvalidInputs';
export {
  measureMemoryUsage,
  type MemoryUsageResult,
} from './measureMemoryUsage';
export { createSpy, type SpyFunction, type SpyCall } from './createSpy';
export {
  testMultipleCases,
  type TestCase,
  type TestCaseResult,
} from './testMultipleCases';
export { waitForCondition } from './waitForCondition';
export { cloneTestData } from './cloneTestData';
export { generateRandomString, type CharsetType } from './generateRandomString';
export { assertArraysEqual } from './assertArraysEqual';

// Random data generators
export { generateRandomEmail } from './generateRandomEmail';
export { generateRandomIPv4 } from './generateRandomIPv4';
export { generateRandomUUID } from './generateRandomUUID';
export { generateRandomURL } from './generateRandomURL';
export { generateRandomDate } from './generateRandomDate';
export { generateRandomNumber } from './generateRandomNumber';
export { generateRandomBoolean } from './generateRandomBoolean';
export { generateRandomObject } from './generateRandomObject';
