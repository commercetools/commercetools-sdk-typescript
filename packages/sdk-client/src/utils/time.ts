// export default typeof BigInt !== 'undefined'
//   ? typeof process !== 'undefined' &&
//     typeof process.hrtime !== 'undefined' &&
//     typeof process.hrtime.bigint === 'function' ? () => process.hrtime.bigint()
//     : () => BigInt(Date.now() * 1e6) : () => Date.now() * 1e6;

export default () => Date.now() * 1e6
