module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
      'default', // default jest reporter
      ['jest-allure', { outputDir: '/home/ummi/Downloads/test/jest' }] // allure reporter
  ],
};