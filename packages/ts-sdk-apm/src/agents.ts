// module.exports = require('dd-trace')
// module.exports = require('newrelic')

import datadog from 'dd-trace'
import newrelic from 'newrelic'

datadog.dogstatsd.increment

export { datadog, newrelic }
