/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy, Reference } from './common'
import { UserProvidedIdentifiers } from './message'

/**
 *	Defines the method of authentication for AWS SQS and SNS Destinations.
 */
export enum AwsAuthenticationModeValues {
  Credentials = 'Credentials',
  Iam = 'IAM',
}

export type AwsAuthenticationMode = 'Credentials' | 'IAM' | string
/**
 *	Notification about changes to a resource. The payload format differs for resource [creation](ctp:api:type:ResourceCreatedDeliveryPayload),
 *	[update](ctp:api:type:ResourceUpdatedDeliveryPayload),
 *	and [deletion](ctp:api:type:ResourceDeletedDeliveryPayload).
 *
 */
export interface ChangeSubscription {
  /**
   *	Unique identifier for the type of resource, for example, `cart`.
   *
   *
   */
  readonly resourceTypeId: ChangeSubscriptionResourceTypeId
}
/**
 *	Resource types supported by [ChangeSubscriptions](ctp:api:type:ChangeSubscription):
 *
 */
export enum ChangeSubscriptionResourceTypeIdValues {
  ApprovalFlow = 'approval-flow',
  ApprovalRule = 'approval-rule',
  AssociateRole = 'associate-role',
  AttributeGroup = 'attribute-group',
  BusinessUnit = 'business-unit',
  Cart = 'cart',
  CartDiscount = 'cart-discount',
  Category = 'category',
  Channel = 'channel',
  Customer = 'customer',
  CustomerEmailToken = 'customer-email-token',
  CustomerGroup = 'customer-group',
  CustomerPasswordToken = 'customer-password-token',
  DiscountCode = 'discount-code',
  Extension = 'extension',
  InventoryEntry = 'inventory-entry',
  KeyValueDocument = 'key-value-document',
  Order = 'order',
  OrderEdit = 'order-edit',
  Payment = 'payment',
  Product = 'product',
  ProductDiscount = 'product-discount',
  ProductSelection = 'product-selection',
  ProductTailoring = 'product-tailoring',
  ProductType = 'product-type',
  Quote = 'quote',
  QuoteRequest = 'quote-request',
  Review = 'review',
  ShippingMethod = 'shipping-method',
  ShoppingList = 'shopping-list',
  StagedQuote = 'staged-quote',
  StandalonePrice = 'standalone-price',
  State = 'state',
  Store = 'store',
  Subscription = 'subscription',
  TaxCategory = 'tax-category',
  Type = 'type',
  Zone = 'zone',
}

export type ChangeSubscriptionResourceTypeId =
  | 'approval-flow'
  | 'approval-rule'
  | 'associate-role'
  | 'attribute-group'
  | 'business-unit'
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-email-token'
  | 'customer-group'
  | 'customer-password-token'
  | 'discount-code'
  | 'extension'
  | 'inventory-entry'
  | 'key-value-document'
  | 'order'
  | 'order-edit'
  | 'payment'
  | 'product'
  | 'product-discount'
  | 'product-selection'
  | 'product-tailoring'
  | 'product-type'
  | 'quote'
  | 'quote-request'
  | 'review'
  | 'shipping-method'
  | 'shopping-list'
  | 'staged-quote'
  | 'standalone-price'
  | 'state'
  | 'store'
  | 'subscription'
  | 'tax-category'
  | 'type'
  | 'zone'
  | string
/**
 *	The [CloudEventsFormat](ctp:api:type:CloudEventsFormat) represents event data in a way that conforms to a common specification. The payload can be found inside the `data` field.
 *
 */
export interface CloudEventsPayload {
  /**
   *	The version of the [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md) specification which the event uses.
   *
   *
   */
  readonly specversion: string
  /**
   *	Unique identifier of the event.
   *
   *
   */
  readonly id: string
  /**
   *	The `type` is namespaced with `com.commercetools`, followed by the [ReferenceTypeId](ctp:api:type:ReferenceTypeId), the type of Subscription (either `message` or `change`), and the message or change type.
   *	For example, `com.commercetools.product.message.ProductPublished` or `com.commercetools.order.change.ResourceCreated`.
   *
   *
   */
  readonly type: string
  /**
   *	The default REST URI of the [ReferenceTypeId](ctp:api:type:ReferenceTypeId) that triggered this event, including the project key.
   *
   *
   */
  readonly source: string
  /**
   *	Unique identifier of the resource that triggered the event.
   *
   *
   */
  readonly subject: string
  /**
   *	Corresponds to the `lastModifiedAt` of the resource at the time the event was triggered.
   *
   *
   */
  readonly time: string
  /**
   *	Corresponds to the `sequenceNumber` of a [MessageSubscription](ctp:api:type:MessageSubscription). Can be used to process messages in the correct order.
   *
   *
   */
  readonly sequence?: string
  /**
   *	`"Integer"`
   *
   *
   */
  readonly sequencetype?: string
  /**
   *	The URI from which the message can be retrieved if messages are [enabled](/../api/projects/messages#enable-querying-messages-via-the-api). Only set for [MessageSubscriptions](ctp:api:type:MessageSubscription).
   *
   *
   */
  readonly dataref?: string
  /**
   *	[MessageDeliveryPayload](ctp:api:type:MessageDeliveryPayload), [ResourceCreatedDeliveryPayload](ctp:api:type:ResourceCreatedDeliveryPayload), [ResourceUpdatedDeliveryPayload](ctp:api:type:ResourceUpdatedDeliveryPayload), or [ResourceDeletedDeliveryPayload](ctp:api:type:ResourceDeletedDeliveryPayload).
   *
   *
   */
  readonly data: DeliveryPayload
}
export type DeliveryFormat = CloudEventsFormat | PlatformFormat
export interface IDeliveryFormat {
  /**
   *
   */
  readonly type: string
}
/**
 *	The CloudEventsFormat can be used with any [Destination](#destination-1), and the payload is delivered in the `JSON Event Format`. [AzureEventGridDestination](ctp:api:type:AzureEventGridDestination) offers native support to filter and route CloudEvents.
 *
 */
export interface CloudEventsFormat extends IDeliveryFormat {
  readonly type: 'CloudEvents'
  /**
   *
   */
  readonly cloudEventsVersion: string
}
/**
 *	All payloads for the [PlatformFormat](ctp:api:type:PlatformFormat) share these common fields.
 *
 */
export type DeliveryPayload =
  | MessageDeliveryPayload
  | ResourceCreatedDeliveryPayload
  | ResourceDeletedDeliveryPayload
  | ResourceUpdatedDeliveryPayload
export interface IDeliveryPayload {
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful for processing notifications if the Destination receives them from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Identifies the payload.
   *
   *
   */
  readonly notificationType: string
  /**
   *	Reference to the resource that triggered the notification.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
}
export type Destination =
  | AzureEventGridDestination
  | AzureServiceBusDestination
  | ConfluentCloudDestination
  | EventBridgeDestination
  | GoogleCloudPubSubDestination
  | SnsDestination
  | SqsDestination
export interface IDestination {
  /**
   *
   */
  readonly type: string
}
/**
 *	[Azure Event Grid](https://azure.microsoft.com/en-us/products/event-grid/) can be used to push notifications to Azure Functions, HTTP endpoints (webhooks), and several other Azure tools. Event Grid can only be used with the [CloudEventsFormat](ctp:api:type:CloudEventsFormat).
 *	To set up a Subscription with Azure Event Grid, first create a topic in the [Azure Portal](https://azure.microsoft.com/en-us/get-started/azure-portal/). To allow Composable Commerce to push notifications to your topic, provide an [access key](https://docs.microsoft.com/en-us/azure/event-grid/get-access-keys).
 *
 */
export interface AzureEventGridDestination extends IDestination {
  readonly type: 'EventGrid'
  /**
   *	URI of the topic.
   *
   *
   */
  readonly uri: string
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly accessKey: string
}
/**
 *	[Azure Service Bus](https://azure.microsoft.com/en-us/products/service-bus/) can be used as a pull-queue with [Queues](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#queues), or to fan-out notifications with [Topics and Subscriptions](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions).
 *	To set up a Subscription with Azure Service Bus, first create a queue/topic in the [Azure Portal](https://azure.microsoft.com/en-us/get-started/azure-portal/) with a Shared Access Policy including the `Send` permission.
 *
 */
export interface AzureServiceBusDestination extends IDestination {
  readonly type: 'AzureServiceBus'
  /**
   *	SharedAccessKey is partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly connectionString: string
}
/**
 *	This destination can be used to push notifications to [Confluent Cloud](https://www.confluent.io/confluent-cloud/).
 *	To set up a Subscription of this type, first, create a topic in Confluent Cloud.
 *	Then, to allow Composable Commerce to push notifications to your topic, generate [API keys](https://docs.confluent.io/cloud/current/access-management/authenticate/api-keys/api-keys.html) for your topic, and create the Subscription destination using the generated credentials.
 *
 *	The Composable Commerce producer uses the following values: `SASL_SSL` for`security.protocol`, `PLAIN` for`sasl.mechanism`, and the default value (1048576) for `max.request.size`.
 *
 */
export interface ConfluentCloudDestination extends IDestination {
  readonly type: 'ConfluentCloud'
  /**
   *	URL to the bootstrap server including the port number in the format `<xxxxx>.<region>.<provider>.confluent.cloud:9092`.
   *
   *
   */
  readonly bootstrapServer: string
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly apiKey: string
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly apiSecret: string
  /**
   *	The Kafka `acks` value.
   *
   *
   */
  readonly acks: string
  /**
   *	The name of the topic.
   *
   *
   */
  readonly topic: string
  /**
   *	The Kafka record key.
   *
   *
   */
  readonly key?: string
}
/**
 *	[AWS EventBridge](https://aws.amazon.com/eventbridge/) can be used to push events and messages to a serverless event bus that can forward them to AWS SQS, SNS, Lambda, and other AWS services based on forwarding rules.
 *	Once the Subscription is created, an equivalent "partner event source" is created in AWS EventBridge. This event source must be associated with an event bus for the Subscription setup to be complete.
 *
 */
export interface EventBridgeDestination extends IDestination {
  readonly type: 'EventBridge'
  /**
   *	AWS region that receives the events.
   *
   *
   */
  readonly region: string
  /**
   *	ID of the AWS account that receives the events.
   *
   *
   */
  readonly accountId: string
  /**
   *	URN for the EventBridge destination.
   *
   *
   */
  readonly source: string
}
/**
 *	Destination for [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/) that can be used
 *	for [Pull subscriptions](https://cloud.google.com/pubsub/docs/pull) as well as for [Push subscriptions](https://cloud.google.com/pubsub/docs/push).
 *	The `topic` must give the `pubsub.topics.publish` permission to the service account `subscriptions@commercetools-platform.iam.gserviceaccount.com`.
 *	If used with the [CloudEventsFormat](#cloudeventsformat), the notification conforms to the [PubSub Protocol Binding](https://github.com/google/knative-gcp/blob/master/docs/spec/pubsub-protocol-binding.md) of the [Structured Content Mode](https://github.com/google/knative-gcp/blob/master/docs/spec/pubsub-protocol-binding.md#32-structured-content-mode).
 *
 */
export interface GoogleCloudPubSubDestination extends IDestination {
  readonly type: 'GoogleCloudPubSub'
  /**
   *	ID of the Google Cloud project that contains the Pub/Sub topic.
   *
   *
   */
  readonly projectId: string
  /**
   *	Name of the topic.
   *
   *
   */
  readonly topic: string
}
/**
 *	This payload is sent for a [MessageSubscription](ctp:api:type:MessageSubscription).
 *
 */
export interface MessageDeliveryPayload extends IDeliveryPayload {
  readonly notificationType: 'Message'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful for processing notifications if the Destination receives them from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the notification.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Unique ID of the message.
   *
   *
   */
  readonly id: string
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the resource was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the resource was last modified.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Used to ensure all messages of the resource are processed in correct order.
   *	The `sequenceNumber` of the next message of the resource is a successor of the `sequenceNumber` of the current message.
   *
   *
   */
  readonly sequenceNumber: number
  /**
   *	Version of the resource on which the update was performed.
   *
   *
   */
  readonly resourceVersion: number
  /**
   *	If the payload does not fit into the size limit or its format is not accepted by the messaging service, the `payloadNotIncluded` field is present.
   *
   *
   */
  readonly payloadNotIncluded?: PayloadNotIncluded
}
/**
 *	Messages will be delivered even if the Messages Query HTTP API [is not enabled](/../api/projects/messages#enable-querying-messages-via-the-api).
 *
 *	For MessageSubscriptions, the format of the payload is [MessageDeliveryPayload](ctp:api:type:MessageDeliveryPayload).
 *
 */
export interface MessageSubscription {
  /**
   *	Unique identifier for the type of resource, for example, `order`.
   *
   *
   */
  readonly resourceTypeId: MessageSubscriptionResourceTypeId
  /**
   *	Must contain valid message types for the resource. For example, for resource type `product` the message type `ProductPublished` is valid.
   *	If no `types` of messages are given, the Subscription will receive all messages for this resource.
   *
   *
   */
  readonly types?: string[]
}
/**
 *	Resource types supported by [MessageSubscriptions](ctp:api:type:MessageSubscription):
 *
 */
export enum MessageSubscriptionResourceTypeIdValues {
  ApprovalFlow = 'approval-flow',
  ApprovalRule = 'approval-rule',
  AssociateRole = 'associate-role',
  BusinessUnit = 'business-unit',
  Category = 'category',
  Customer = 'customer',
  CustomerEmailToken = 'customer-email-token',
  CustomerGroup = 'customer-group',
  CustomerPasswordToken = 'customer-password-token',
  InventoryEntry = 'inventory-entry',
  Order = 'order',
  Payment = 'payment',
  Product = 'product',
  ProductSelection = 'product-selection',
  ProductTailoring = 'product-tailoring',
  Quote = 'quote',
  QuoteRequest = 'quote-request',
  Review = 'review',
  ShoppingList = 'shopping-list',
  StagedQuote = 'staged-quote',
  StandalonePrice = 'standalone-price',
  Store = 'store',
}

export type MessageSubscriptionResourceTypeId =
  | 'approval-flow'
  | 'approval-rule'
  | 'associate-role'
  | 'business-unit'
  | 'category'
  | 'customer'
  | 'customer-email-token'
  | 'customer-group'
  | 'customer-password-token'
  | 'inventory-entry'
  | 'order'
  | 'payment'
  | 'product'
  | 'product-selection'
  | 'product-tailoring'
  | 'quote'
  | 'quote-request'
  | 'review'
  | 'shopping-list'
  | 'staged-quote'
  | 'standalone-price'
  | 'store'
  | string
export interface PayloadNotIncluded {
  /**
   *	Reason the payload is not included. For example, the payload is too large, or its content is not supported by the Subscription destination.
   *
   *
   */
  readonly reason: string
  /**
   *	Value of the `type` field in the original payload.
   *
   *
   */
  readonly payloadType: string
}
/**
 *	The PlatformFormat uses constructs that are similar to the ones used in the REST API, for example, on the [Messages Query HTTP API](/../api/projects/messages).
 *
 */
export interface PlatformFormat extends IDeliveryFormat {
  readonly type: 'Platform'
}
/**
 *	This payload is sent for a [ChangeSubscription](ctp:api:type:ChangeSubscription) when a resource is created.
 *
 */
export interface ResourceCreatedDeliveryPayload extends IDeliveryPayload {
  readonly notificationType: 'ResourceCreated'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful for processing notifications if the Destination receives them from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the notification.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the resource was last modified.
   *
   *
   */
  readonly modifiedAt: string
}
/**
 *	This payload is sent for a [ChangeSubscription](ctp:api:type:ChangeSubscription) when a resource is deleted.
 *
 */
export interface ResourceDeletedDeliveryPayload extends IDeliveryPayload {
  readonly notificationType: 'ResourceDeleted'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful for processing notifications if the Destination receives them from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the notification.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the resource was last deleted.
   *
   *
   */
  readonly modifiedAt: string
  /**
   *	`true` if the `dataErasure` [parameter](/../api/gdpr#data-erasure-of-personal-data) on the `DELETE` request was set to `true`.
   *
   *
   */
  readonly dataErasure?: boolean
}
/**
 *	This payload is sent for a [ChangeSubscription](ctp:api:type:ChangeSubscription) when a resource is updated. This includes updates by a background process, like a change in product availability.
 *
 */
export interface ResourceUpdatedDeliveryPayload extends IDeliveryPayload {
  readonly notificationType: 'ResourceUpdated'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful for processing notifications if the Destination receives them from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the notification.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Version of the resource before the update.
   *
   *
   */
  readonly oldVersion: number
  /**
   *	Date and time (UTC) the resource was last updated.
   *
   *
   */
  readonly modifiedAt: string
}
/**
 *	[AWS SNS](https://aws.amazon.com/sns/) can be used to push messages to AWS Lambda, HTTP endpoints (webhooks), or fan-out messages to SQS queues. The SQS queue must be a [Standard](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html) queue type.
 *
 *	We recommend setting `authenticationMode` to `IAM`, to avoid unnecessary key management. For IAM authentication and before creating the Subscription, give permissions to the following user account: `arn:aws:iam::362576667341:user/subscriptions`. Otherwise, a test notification will not be sent.
 *
 *	If you prefer to use `Credentials` for authentication, we recommend [creating an IAM user](https://docs.aws.amazon.com/sns/latest/dg/sns-setting-up.html#create-iam-user) with an `accessKey` and `accessSecret` pair specifically for each Subscription.
 *
 *	The IAM user should only have the `sns:Publish` permission on this topic.
 *
 */
export interface SnsDestination extends IDestination {
  readonly type: 'SNS'
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessKey?: string
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessSecret?: string
  /**
   *	Amazon Resource Name (ARN) of the topic.
   *
   */
  readonly topicArn: string
  /**
   *	Defines the method of authentication for the SNS topic.
   *
   */
  readonly authenticationMode?: AwsAuthenticationMode
}
/**
 *	[AWS SQS](https://aws.amazon.com/sqs/) is a pull-queue on AWS.
 *	The queue must be a [Standard](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html) queue type with a `MaximumMessageSize` of `256 KB`.
 *
 *	We recommend setting `authenticationMode` to `IAM`, to avoid unnecessary key management. For IAM authentication and before creating the Subscription, give permissions to the following user account: `arn:aws:iam::362576667341:user/subscriptions`. Otherwise, a test message will not be sent.
 *
 *	If you prefer to use `Credentials` for authentication, we recommend [creating an IAM user](https://docs.aws.amazon.com/sns/latest/dg/sns-setting-up.html#create-iam-user) with an `accessKey` and `accessSecret` pair specifically for each Subscription.
 *
 *	The IAM user should only have the `sqs:SendMessage` permission on this queue.
 *
 */
export interface SqsDestination extends IDestination {
  readonly type: 'SQS'
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessKey?: string
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessSecret?: string
  /**
   *	URL of the Amazon SQS queue.
   *
   *
   */
  readonly queueUrl: string
  /**
   *	[AWS Region](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) the message queue is located in.
   *
   *
   */
  readonly region: string
  /**
   *	Defines the method of authentication for the SQS queue.
   *
   */
  readonly authenticationMode?: AwsAuthenticationMode
}
export interface Subscription extends BaseResource {
  /**
   *	Unique identifier of the Subscription.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Subscription.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Subscription was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Subscription was last modified.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the Subscription.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the Subscription.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Changes subscribed to.
   *
   *
   */
  readonly changes: ChangeSubscription[]
  /**
   *	Messaging service to which the notifications are sent.
   *
   *
   */
  readonly destination: Destination
  /**
   *	User-defined unique identifier of the Subscription.
   *
   *
   */
  readonly key?: string
  /**
   *	Messages subscribed to.
   *
   *
   */
  readonly messages: MessageSubscription[]
  /**
   *	Format in which the payload is delivered.
   *
   *
   */
  readonly format: DeliveryFormat
  /**
   *	Status of the Subscription.
   *
   *
   */
  readonly status: SubscriptionHealthStatus
}
/**
 *	Either `messages` or `changes` must be set.
 *
 */
export interface SubscriptionDraft {
  /**
   *	Changes to be subscribed to.
   *
   *
   */
  readonly changes?: ChangeSubscription[]
  /**
   *	Messaging service to which the notifications are sent.
   *
   *
   */
  readonly destination: Destination
  /**
   *	User-defined unique identifier for the Subscription.
   *
   *
   */
  readonly key?: string
  /**
   *	Messages to be subscribed to.
   *
   *
   */
  readonly messages?: MessageSubscription[]
  /**
   *	Format in which the payload is delivered. When not provided, the [PlatformFormat](ctp:api:type:PlatformFormat) is selected by default.
   *
   *
   */
  readonly format?: DeliveryFormat
}
/**
 *	The health status of the Subscription that indicates whether notifications are being delivered.
 *
 */
export enum SubscriptionHealthStatusValues {
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  Healthy = 'Healthy',
  ManuallySuspended = 'ManuallySuspended',
  TemporaryError = 'TemporaryError',
}

export type SubscriptionHealthStatus =
  | 'ConfigurationError'
  | 'ConfigurationErrorDeliveryStopped'
  | 'Healthy'
  | 'ManuallySuspended'
  | 'TemporaryError'
  | string
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [Subscription](ctp:api:type:Subscription).
 *
 */
export interface SubscriptionPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	Subscriptions matching the query.
   *
   *
   */
  readonly results: Subscription[]
}
export interface SubscriptionUpdate {
  /**
   *	Expected version of the Subscription on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Subscription.
   *
   *
   */
  readonly actions: SubscriptionUpdateAction[]
}
export type SubscriptionUpdateAction =
  | SubscriptionChangeDestinationAction
  | SubscriptionSetChangesAction
  | SubscriptionSetKeyAction
  | SubscriptionSetMessagesAction
export interface ISubscriptionUpdateAction {
  /**
   *
   */
  readonly action: string
}
/**
 *	A test notification is sent to ensure the correct configuration of the Destination. If the notification cannot be delivered, the update will fail. The payload of the test notification is of type [ResourceCreated](ctp:api:type:ResourceCreatedDeliveryPayload) for the `resourceTypeId` `subscription`. The `status` will change to [Healthy](ctp:api:type:SubscriptionHealthStatus), if it isn't already.
 *
 */
export interface SubscriptionChangeDestinationAction
  extends ISubscriptionUpdateAction {
  readonly action: 'changeDestination'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly destination: Destination
}
export interface SubscriptionSetChangesAction
  extends ISubscriptionUpdateAction {
  readonly action: 'setChanges'
  /**
   *	Value to set. Can only be unset if `messages` is set.
   *
   *
   */
  readonly changes?: ChangeSubscription[]
}
export interface SubscriptionSetKeyAction extends ISubscriptionUpdateAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
export interface SubscriptionSetMessagesAction
  extends ISubscriptionUpdateAction {
  readonly action: 'setMessages'
  /**
   *	Value to set. Can only be unset if `changes` is set.
   *
   *
   */
  readonly messages?: MessageSubscription[]
}
