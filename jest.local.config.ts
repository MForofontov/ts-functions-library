const os = require("os");

module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node", // Change to standard node environment
  reporters: [
    "default", // default jest reporter
    ['jest-html-reporter', { outputPath: 'local_test/jest.html' }], // jest html reporter
  ],
  collectCoverage: true,
  coverageDirectory: 'local_test/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};