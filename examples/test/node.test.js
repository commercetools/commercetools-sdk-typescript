const { getProjectDetails } = require('../node/node')

describe('Dependency test', function () {
  test('should get project details', function (done) {
    getProjectDetails().then(function ({ body }) {
      expect(body.key).toBe(`${process.env.CTP_PROJECT_KEY}`)
      done()
    })
  })
})
