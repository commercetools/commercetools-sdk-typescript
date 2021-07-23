module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  reporters: [
    'default',
    process.env.CI === 'true'
      ? [
          'jest-junit',
          { outputName: 'results.xml', outputDirectory: 'test-results' },
        ]
      : null,
  ].filter(elem => elem !== null),
}
