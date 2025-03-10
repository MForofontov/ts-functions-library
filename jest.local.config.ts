const os = require("os");

module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node", // Change to standard node environment
  reporters: [
    "default", // default jest reporter
    ['jest-html-reporter', { outputPath: 'jest.html' }], // jest html reporter
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  testPathIgnorePatterns: ['/node_modules/', '/allure-results/'], // Ignore the allure-results directory
};