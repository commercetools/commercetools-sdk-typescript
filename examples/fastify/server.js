const { getApiRoot } = require('./sdk')

const fastify = require('fastify')({
  logger: true,
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

/**
 * api endpoint without concurrent modification handler middleware [ERROR]
 */
fastify.get('/update-project-error', async function (request, reply) {
  // update project
  const apiRoot = getApiRoot()
  const response = await apiRoot
    .post({
      body: {
        version: 100, // <--- mismatched version (use a version lower than current version)
        actions: [
          {
            action: 'changeName',
            name: 'fastify-error-example',
          },
        ],
      },
    })
    .execute()
    .catch((err) => err)
  reply.send(response)
})

/**
 * api endpoint with concurrent modification handler middleware [SUCCESS]
 */
fastify.get('/update-project-success', async function (request, reply) {
  // update project
  const apiRoot = getApiRoot(true)
  const response = await apiRoot
    .post({
      body: {
        version: 100, // <--- mismatched version (use a version lower than current version)
        actions: [
          {
            action: 'changeName',
            name: 'fastify-success-example',
          },
        ],
      },
    })
    .execute()
    .catch((err) => err)
  reply.send(response)
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  // Server is now listening on ${address}
  fastify.log.info(`server running on port ${address}`)
})
