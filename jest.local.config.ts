module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  testEnvironment: 'node', // Change to standard node environment
  reporters: [
    'default', // default jest reporter
    ['jest-html-reporter', { outputPath: 'local-testing/jest.html' }], // jest html reporter
  ],
  collectCoverage: true,
  coverageDirectory: 'local-testing/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
