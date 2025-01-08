// tracer.ts
const tracer = require('dd-trace')

function initializeAPM() {
  tracer.init({
    service: 'my-service-name', // Your service name
    env: process.env.NODE_ENV || 'development', // Environment, e.g., production
    version: '1.0.0', // Application version
    logInjection: true, // Add trace IDs to logs if using a compatible logger
    analytics: true, // Enable APM analytics
  })

  // Optionally enable specific integrations
  tracer.use('http') // Trace HTTP requests
  tracer.use('express') // Trace Express routes (if using Express)
}

module.exports = {
  initializeAPM,
  tracer,
}
