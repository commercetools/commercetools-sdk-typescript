const esbuild = require('esbuild');

const generalConfig = { minify: true, bundle: true, write: true }

const sdkClientConfig = esbuild.build(
  Object.assign({}, generalConfig, {
    entryPoints: ['packages/platform-sdk/src/index.ts'],
    globalName: 'window["@commercetools/platform-sdk"]',
    outfile: 'packages/platform-sdk/dist/commercetools-platform-sdk.umd.js',
  })
)

const sdkClientV3Config = esbuild.build(
  Object.assign({}, generalConfig, {
    entryPoints: ['packages/sdk-client-v3/src/index.ts'],
    globalName: 'window["@commercetools/ts-client"]',
    outfile: 'packages/sdk-client-v3/dist/commercetools-ts-client.umd.js'
  })
)

const platformSdkConfig = esbuild.build(
  Object.assign({}, generalConfig, {
    entryPoints: ['packages/sdk-client/src/index.ts'],
    globalName: 'window["@commercetools/sdk-client-v2"]',
    outfile: 'packages/sdk-client/dist/commercetools-sdk-client-v2.umd.js'
  })
)

Promise.all([
  sdkClientConfig, sdkClientV3Config, platformSdkConfig
]).catch(console.error);
