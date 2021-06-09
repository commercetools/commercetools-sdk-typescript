module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  verbose: true,
  coverageThreshold: {
    global: {
      // branches: 100,
      // lines: 100,
      // functions: 100,
      statements: 90
    }
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    }
  }
}
