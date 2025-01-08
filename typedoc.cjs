module.exports = {
  entryPoints: ['packages/*'],
  name: 'Typescript SDK Type Docs',
  entryPointStrategy: 'packages',
  includeVersion: false,
  visibilityFilters: {
    protected: true,
    private: true,
    inherited: true,
    external: true
  }
}