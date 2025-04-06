import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  AzureServiceBusDestination,
  ChangeSubscription,
  SubscriptionDraft,
} from '../../../src'

const azureServiceBusDestination: AzureServiceBusDestination = {
  type: 'AzureServiceBus',
  connectionString: '',
}

const changeSubscription: ChangeSubscription = {
  resourceTypeId: 'product',
}
const subscriptionDraft: SubscriptionDraft = {
  key: randomUUID(),
  destination: azureServiceBusDestination,
  changes: [changeSubscription],
}

export const createSubscription = async () =>
  apiRoot.subscriptions().post({ body: subscriptionDraft }).execute()

export const deleteSubscription = async (responseCreatedSubscription) =>
  apiRoot
    .subscriptions()
    .withId({ ID: responseCreatedSubscription.body.id })
    .delete({
      queryArgs: { version: responseCreatedSubscription.body.version },
    })
    .execute()
