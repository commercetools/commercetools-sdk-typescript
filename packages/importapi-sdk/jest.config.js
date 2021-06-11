module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/test'],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      // statements: 90
    }
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      ignoreCodes: ["TS7019", "TS2345", "TS7006", "TS7053"]
    }
  },
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
