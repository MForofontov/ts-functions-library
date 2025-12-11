/**
 * Testing Utilities Index
 *
 * Exports all testing helper functions and constants for streamlined test development.
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

// Mock data constants
export { MOCK_EMAILS } from './constants/mockEmails';
export { MOCK_URLS } from './constants/mockUrls';
export { MOCK_IP_ADDRESSES } from './constants/mockIpAddresses';
export { MOCK_JSON } from './constants/mockJson';
export { MOCK_ARRAYS } from './constants/mockArrays';
export { MOCK_OBJECTS } from './constants/mockObjects';
