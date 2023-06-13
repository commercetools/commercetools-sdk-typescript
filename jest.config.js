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
  moduleFileExtensions: ['ts', 'js', 'json'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: 'coverage',
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
}
