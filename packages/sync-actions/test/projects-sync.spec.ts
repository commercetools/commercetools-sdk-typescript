import createProjectsSync, { actionGroups } from '../src/projects'
import {
  baseActionsList,
  myBusinessUnitActionsList,
  customerSearchActionsList,
} from '../src/projects-actions'
import { ActionGroup } from '@commercetools/sdk-client-v2'
import { DeepPartial } from '../src/types/update-actions'
import {
  Project,
  ProjectUpdateAction,
  SearchIndexingConfiguration,
  SearchIndexingConfigurationValues,
} from '@commercetools/platform-sdk'

describe('Exports', () => {
  test('action group list', () => {
    expect(actionGroups).toEqual(['base', 'myBusinessUnit', 'customerSearch'])
  })

  describe('action list', () => {
    test('should contain `changeName` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([{ action: 'changeName', key: 'name' }])
      )
    })

    test('should contain `changeCurrencies` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([
          { action: 'changeCurrencies', key: 'currencies' },
        ])
      )
    })

    test('should contain `changeCountries` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'changeCountries',
            key: 'countries',
          },
        ])
      )
    })

    test('should contain `changeLanguages` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'changeLanguages',
            key: 'languages',
          },
        ])
      )
    })

    test('should contain `changeMessagesConfiguration` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'changeMessagesConfiguration',
            key: 'messages',
            actionKey: 'messagesConfiguration',
          },
        ])
      )
    })

    test('should contain `setShippingRateInputType` action', () => {
      expect(baseActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'setShippingRateInputType',
            key: 'shippingRateInputType',
          },
        ])
      )
    })

    test('should contain `changeMyBusinessUnitStatusOnCreation` action', () => {
      expect(myBusinessUnitActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'changeMyBusinessUnitStatusOnCreation',
            key: 'myBusinessUnitStatusOnCreation',
            actionKey: 'status',
          },
        ])
      )
    })

    test('should contain `setMyBusinessUnitAssociateRoleOnCreation` action', () => {
      expect(myBusinessUnitActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'setMyBusinessUnitAssociateRoleOnCreation',
            key: 'myBusinessUnitAssociateRoleOnCreation',
            actionKey: 'associateRole',
          },
        ])
      )
    })

    test('should contain `changeCustomerSearchStatus` action', () => {
      expect(customerSearchActionsList).toEqual(
        expect.arrayContaining([
          {
            action: 'changeCustomerSearchStatus',
            key: 'status',
          },
        ])
      )
    })
  })
})

describe('Actions', () => {
  let projectsSync = createProjectsSync()
  beforeEach(() => {
    projectsSync = createProjectsSync()
  })

  test('should build `changeName` action', () => {
    const before: DeepPartial<Project> = { name: 'nameBefore' }
    const now: DeepPartial<Project> = { name: 'nameAfter' }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeName',
        name: now.name,
      },
    ]
    expect(actual).toEqual(expected)
  })

  test('should build `changeCurrencies` action', () => {
    const before: DeepPartial<Project> = { currencies: ['EUR', 'Dollar'] }
    const now: DeepPartial<Project> = { currencies: ['EUR'] }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeCurrencies',
        currencies: now.currencies,
      },
    ]
    expect(actual).toEqual(expected)
  })

  test('should build `changeCountries` action', () => {
    const before: DeepPartial<Project> = { countries: ['Germany', 'Spain'] }
    const now: DeepPartial<Project> = { countries: ['Germany'] }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeCountries',
        countries: now.countries,
      },
    ]
    expect(actual).toEqual(expected)
  })

  test('should build `changeLanguages` action', () => {
    const before: DeepPartial<Project> = { languages: ['German', 'Dutch'] }
    const now: DeepPartial<Project> = { languages: ['Dutch'] }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeLanguages',
        languages: now.languages,
      },
    ]
    expect(actual).toEqual(expected)
  })

  describe('setShippingRateInputType', () => {
    describe('given `shippingRateInputType` is of type `CartClassification`', () => {
      const before: DeepPartial<Project> = {
        shippingRateInputType: {
          type: 'CartClassification',
          values: [
            { key: 'Small', label: { en: 'Small', de: 'Klein' } },
            { key: 'Medium', label: { en: 'Medium', de: 'Mittel' } },
            { key: 'Heavy', label: { en: 'Heavy', de: 'Schwergut' } },
          ],
        },
      }
      describe('given a value of `values` changes', () => {
        const now: DeepPartial<Project> = {
          shippingRateInputType: {
            type: 'CartClassification',
            values: [
              { key: 'Small', label: { en: 'Small', de: 'Klein' } },
              { key: 'Medium', label: { en: 'Medium', de: 'Mittel' } },
              { key: 'Big', label: { en: 'Big', de: 'Groß' } },
            ],
          },
        }

        test('should build `setShippingRateInputType` action', () => {
          const actual = projectsSync.buildActions(now, before)
          const expected: Array<ProjectUpdateAction> = [
            {
              action: 'setShippingRateInputType',
              shippingRateInputType: {
                type: 'CartClassification',
                values: [
                  { key: 'Small', label: { en: 'Small', de: 'Klein' } },
                  { key: 'Medium', label: { en: 'Medium', de: 'Mittel' } },
                  { key: 'Big', label: { en: 'Big', de: 'Groß' } },
                ],
              },
            },
          ]
          expect(actual).toEqual(expected)
        })
      })
      describe('given type changes to `CartValue`', () => {
        let now: DeepPartial<Project> = {
          shippingRateInputType: {
            type: 'CartValue',
          },
        }

        test('should build `setShippingRateInputType` action', () => {
          const actual = projectsSync.buildActions(now, before)
          const expected: Array<ProjectUpdateAction> = [
            {
              action: 'setShippingRateInputType',
              shippingRateInputType: {
                type: 'CartScore',
              },
            },
          ]
          expect(actual).toEqual(expected)
        })

        describe('given type changes to `CartScore`', () => {
          now = {
            shippingRateInputType: {
              type: 'CartScore',
            },
          }

          test('should build `setShippingRateInputType` action', () => {
            const actual = projectsSync.buildActions(now, before)
            const expected: Array<ProjectUpdateAction> = [
              {
                action: 'setShippingRateInputType',
                shippingRateInputType: {
                  type: 'CartScore',
                },
              },
            ]
            expect(actual).toEqual(expected)
          })
        })
      })
    })
  })

  test('should build `changeMessagesConfiguration` action', () => {
    const before: DeepPartial<Project> = {
      messages: {
        enabled: true,
        deleteDaysAfterCreation: 20,
      },
    }
    const now: DeepPartial<Project> = {
      messages: {
        enabled: false,
        deleteDaysAfterCreation: 20,
      },
    }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeMessagesConfiguration',
        messagesConfiguration: { enabled: false, deleteDaysAfterCreation: 20 },
      },
    ]
    expect(actual).toEqual(expected)
  })

  test('should build `changeMyBusinessUnitStatusOnCreation` action', () => {
    const actionGroupList: Array<ActionGroup> = [
      { type: 'base', group: 'allow' },
      { type: 'myBusinessUnit', group: 'allow' },
      { type: 'customerSearch', group: 'ignore' },
    ]
    projectsSync = createProjectsSync(actionGroupList)
    const before: DeepPartial<Project> = {
      businessUnits: { myBusinessUnitStatusOnCreation: 'Active' },
    }
    const now: DeepPartial<Project> = {
      businessUnits: { myBusinessUnitStatusOnCreation: 'Deactivated' },
    }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeMyBusinessUnitStatusOnCreation',
        status: 'Deactivated',
      },
    ]
    expect(actual).toEqual(expected)
  })

  test('should build `setMyBusinessUnitAssociateRoleOnCreation` action', () => {
    const before: DeepPartial<Project> = {
      businessUnits: {
        myBusinessUnitAssociateRoleOnCreation: {
          typeId: 'associate-role',
          key: 'old-role',
        },
      },
    }
    const now: DeepPartial<Project> = {
      businessUnits: {
        myBusinessUnitAssociateRoleOnCreation: {
          typeId: 'associate-role',
          key: 'new-role',
        },
      },
    }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'setMyBusinessUnitAssociateRoleOnCreation',
        associateRole: {
          typeId: 'associate-role',
          key: 'new-role',
        },
      },
    ]
    expect(actual).toEqual(expected)
  })

  test('should build `changeCustomerSearchStatus` action', () => {
    const actionGroupList: Array<ActionGroup> = [
      { type: 'base', group: 'allow' },
      { type: 'myBusinessUnit', group: 'ignore' },
      { type: 'customerSearch', group: 'allow' },
    ]
    projectsSync = createProjectsSync(actionGroupList)
    const before: DeepPartial<
      Project & {
        searchIndexing: SearchIndexingConfiguration & {
          customers: SearchIndexingConfigurationValues
        }
      }
    > = {
      searchIndexing: { customers: { status: 'Activated' } },
    }
    const now: DeepPartial<
      Project & {
        searchIndexing: SearchIndexingConfiguration & {
          customers: SearchIndexingConfigurationValues
        }
      }
    > = {
      searchIndexing: { customers: { status: 'Deactivated' } },
    }
    const actual = projectsSync.buildActions(now, before)
    const expected: Array<ProjectUpdateAction> = [
      {
        action: 'changeCustomerSearchStatus',
        status: 'Deactivated',
      },
    ]
    expect(actual).toEqual(expected)
  })
})
