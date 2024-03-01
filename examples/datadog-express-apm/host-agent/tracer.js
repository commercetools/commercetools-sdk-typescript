// tracer.ts
const tracer = require('dd-trace')

function init() {
  tracer.init() // initialized in a different file to avoid hoisting.
}

module.exports = {
  init,
  tracer,
}
