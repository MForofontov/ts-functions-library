/*
To install jest run these:
npm install jest
npm install --save-dev ts-jest //Typescript
npm install --save-dev @types/jest //To use special functions like it and expect

To install jest html report:
npm install jest-html-reporter --save-dev

To install Junit report (results in an XML format compatible with Jenkins, GitLab, and other CI/CD tools.):
npm install jest-junit --save-dev

To install Allure report:
npm install --save-dev jest-allure allure-commandline

To install SonarQube report:
npm install --save-dev jest-sonar-reporter
npm install --save-dev sonar-scanner
*/

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
      'default', // default jest reporter
      ["jest-html-reporter", { outputPath: '/home/ummi/Downloads/test/jest/jest.html' }], // Jest html reporter
      ['jest-allure', { outputDir: '/home/ummi/Downloads/test/jest/allure' }]
  ],
};