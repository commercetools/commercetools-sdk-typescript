module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  reporters: [
    "default",
    process.env.CI==='true' ? [ "jest-junit", { outputName: "test-results.xml" } ]: null
  ].filter(elem => elem!==null)
}
