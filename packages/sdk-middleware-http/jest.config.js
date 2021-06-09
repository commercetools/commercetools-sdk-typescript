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
      // branches: 85,
      // lines: 85,
      // functions: 85,
      statements: 90
    }
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    }
  }
}
