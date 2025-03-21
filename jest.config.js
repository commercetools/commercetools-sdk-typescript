/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  preset: 'ts-jest',
  testTimeout: 15000,
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.(test|spec)\\.[t]sx?$',
  testPathIgnorePatterns: ['/sdk-client/'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/sdk-client/',
    '/node_modules/',
    '/dist/',
    '/generated/',
  ],
  watchPlugins: ['jest-watch-typeahead/filename'],
  reporters: [
    'default',
    process.env.CI === 'true'
      ? [
          'jest-junit',
          { outputName: 'results.xml', outputDirectory: 'test-results' },
        ]
      : null,
  ].filter(Boolean),
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  setupFilesAfterEnv: ['jest-extended/all'],
}
