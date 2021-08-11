/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.(test|spec)\\.[j|t]sx?$',
  moduleFileExtensions: ['ts', 'js', 'json'],
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
