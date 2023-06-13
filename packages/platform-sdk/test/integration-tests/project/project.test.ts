import { ctpApiBuilder } from '../../helpers/ctp-api-helper'

describe('testing project API calls', () => {
  it('should get by Key and update a project', async () => {
    const countries = ['DE']

    const project = await ctpApiBuilder.get().execute()

    const updateProject = await ctpApiBuilder
      .post({
        body: {
          version: project.body.version,
          actions: [
            {
              action: 'changeCountries',
              countries,
            },
          ],
        },
      })
      .execute()

    expect(updateProject.body.version).not.toBe(null)
    expect(updateProject.statusCode).toEqual(200)
  })
})
