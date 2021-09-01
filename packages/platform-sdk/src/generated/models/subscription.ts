/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy, Reference } from './common'
import { UserProvidedIdentifiers } from './message'

export interface ChangeSubscription {
  /**
   *
   */
  readonly resourceTypeId: string
}
export type DeliveryFormat = DeliveryCloudEventsFormat | DeliveryPlatformFormat
export interface DeliveryCloudEventsFormat {
  readonly type: 'CloudEvents'
  /**
   *
   */
  readonly cloudEventsVersion: string
}
export interface DeliveryPlatformFormat {
  readonly type: 'Platform'
}
export type Destination =
  | AzureEventGridDestination
  | AzureServiceBusDestination
  | GoogleCloudPubSubDestination
  | IronMqDestination
  | SnsDestination
  | SqsDestination
export interface AzureEventGridDestination {
  readonly type: 'EventGrid'
  /**
   *
   */
  readonly uri: string
  /**
   *
   */
  readonly accessKey: string
}
export interface AzureServiceBusDestination {
  readonly type: 'AzureServiceBus'
  /**
   *
   */
  readonly connectionString: string
}
export interface GoogleCloudPubSubDestination {
  readonly type: 'GoogleCloudPubSub'
  /**
   *
   */
  readonly projectId: string
  /**
   *
   */
  readonly topic: string
}
export interface IronMqDestination {
  readonly type: 'IronMQ'
  /**
   *
   */
  readonly uri: string
}
export interface MessageSubscription {
  /**
   *
   */
  readonly resourceTypeId: string
  /**
   *
   */
  readonly types?: string[]
}
export interface PayloadNotIncluded {
  /**
   *
   */
  readonly reason: string
  /**
   *
   */
  readonly payloadType: string
}
export interface SnsDestination {
  readonly type: 'SNS'
  /**
   *
   */
  readonly accessKey: string
  /**
   *
   */
  readonly accessSecret: string
  /**
   *
   */
  readonly topicArn: string
}
export interface SqsDestination {
  readonly type: 'SQS'
  /**
   *
   */
  readonly accessKey: string
  /**
   *
   */
  readonly accessSecret: string
  /**
   *
   */
  readonly queueUrl: string
  /**
   *
   */
  readonly region: string
}
export interface Subscription extends BaseResource {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 2019-02-01 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 2019-02-01 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *
   */
  readonly changes: ChangeSubscription[]
  /**
   *
   */
  readonly destination: Destination
  /**
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly messages: MessageSubscription[]
  /**
   *
   */
  readonly format: DeliveryFormat
  /**
   *
   */
  readonly status: SubscriptionHealthStatus
}
export type SubscriptionDelivery =
  | MessageDelivery
  | ResourceCreatedDelivery
  | ResourceDeletedDelivery
  | ResourceUpdatedDelivery
export interface MessageDelivery {
  readonly notificationType: 'Message'
  /**
   *
   */
  readonly projectKey: string
  /**
   *
   */
  readonly resource: Reference
  /**
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *
   */
  readonly sequenceNumber: number
  /**
   *
   */
  readonly resourceVersion: number
  /**
   *
   */
  readonly payloadNotIncluded: PayloadNotIncluded
}
export interface ResourceCreatedDelivery {
  readonly notificationType: 'ResourceCreated'
  /**
   *
   */
  readonly projectKey: string
  /**
   *
   */
  readonly resource: Reference
  /**
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly modifiedAt: string
}
export interface ResourceDeletedDelivery {
  readonly notificationType: 'ResourceDeleted'
  /**
   *
   */
  readonly projectKey: string
  /**
   *
   */
  readonly resource: Reference
  /**
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly modifiedAt: string
  /**
   *
   */
  readonly dataErasure?: boolean
}
export interface ResourceUpdatedDelivery {
  readonly notificationType: 'ResourceUpdated'
  /**
   *
   */
  readonly projectKey: string
  /**
   *
   */
  readonly resource: Reference
  /**
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly oldVersion: number
  /**
   *
   */
  readonly modifiedAt: string
}
export interface SubscriptionDraft {
  /**
   *
   */
  readonly changes?: ChangeSubscription[]
  /**
   *
   */
  readonly destination: Destination
  /**
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly messages?: MessageSubscription[]
  /**
   *
   */
  readonly format?: DeliveryFormat
}
export type SubscriptionHealthStatus =
  | 'ConfigurationError'
  | 'ConfigurationErrorDeliveryStopped'
  | 'Healthy'
  | 'TemporaryError'
export interface SubscriptionPagedQueryResponse {
  /**
   *
   */
  readonly limit: number
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total?: number
  /**
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: Subscription[]
}
export interface SubscriptionUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: SubscriptionUpdateAction[]
}
export type SubscriptionUpdateAction =
  | SubscriptionChangeDestinationAction
  | SubscriptionSetChangesAction
  | SubscriptionSetKeyAction
  | SubscriptionSetMessagesAction
export interface SubscriptionChangeDestinationAction {
  readonly action: 'changeDestination'
  /**
   *
   */
  readonly destination: Destination
}
export interface SubscriptionSetChangesAction {
  readonly action: 'setChanges'
  /**
   *
   */
  readonly changes?: ChangeSubscription[]
}
export interface SubscriptionSetKeyAction {
  readonly action: 'setKey'
  /**
   *	If `key` is absent or `null`, this field will be removed if it exists.
   *
   */
  readonly key?: string
}
export interface SubscriptionSetMessagesAction {
  readonly action: 'setMessages'
  /**
   *
   */
  readonly messages?: MessageSubscription[]
}
