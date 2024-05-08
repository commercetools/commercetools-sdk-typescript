module.exports = {
  entryPoints: ['packages/sdk-client/src'],
  out: 'docs',
  visibilityFilters: {
    protected: true,
    private: true,
    inherited: true,
    external: true
  }
}