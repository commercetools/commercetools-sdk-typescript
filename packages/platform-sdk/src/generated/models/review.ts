/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import {
  BaseResource,
  CreatedBy,
  IReference,
  IResourceIdentifier,
  LastModifiedBy,
} from './common'
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import { ProductReference, ProductResourceIdentifier } from './product'
import { StateReference, StateResourceIdentifier } from './state'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface Review extends BaseResource {
  /**
   *	Unique identifier of the Review.
   *
   */
  readonly id: string
  /**
   *	Current version of the Review.
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Review was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Review was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the Review.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the Review.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the Review.
   *
   *
   */
  readonly key?: string
  /**
   *	Must be unique among Reviews. For example, if this value is set to Customer `id` + Product `id`, only one Review per Customer and per Product is allowed.
   *
   *
   */
  readonly uniquenessValue?: string
  /**
   *	Language in which the content of the Review is written.
   *
   *
   */
  readonly locale?: string
  /**
   *	Name of the author.
   *
   *
   */
  readonly authorName?: string
  /**
   *	Title of the Review.
   *
   *
   */
  readonly title?: string
  /**
   *	Content of the Review.
   *
   *
   */
  readonly text?: string
  /**
   *	Identifies the target of the Review. Can be a [Product](ctp:api:type:Product) or a [Channel](ctp:api:type:Channel), specified as [ProductReference](ctp:api:type:ProductReference) or [ChannelReference](ctp:api:type:ChannelReference), respectively.
   *
   */
  readonly target?: ProductReference | ChannelReference
  /**
   *	Indicates if this Review is taken into account in the ratings statistics of the target.
   *	A Review is per default used in the statistics, unless the Review is in a state that does not have the [role](ctp:api:type:StateRoleEnum) `ReviewIncludedInStatistics`.
   *	If the role of a [State](ctp:api:type:State) is modified after the calculation of this field, the calculation is not updated.
   *
   */
  readonly includedInStatistics: boolean
  /**
   *	Rating of the Product or Channel.
   *
   */
  readonly rating?: number
  /**
   *	State of the Review. Used for approval processes, see [Review approval process](/../tutorials/review-ratings#review-approval-process) for details.
   *
   *
   */
  readonly state?: StateReference
  /**
   *	Customer who created the Review.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Custom Fields of the Review.
   *
   *
   */
  readonly custom?: CustomFields
}
/**
 *	When creating a new Review, at least one of `title`, `text` or `rating` should be set.
 *
 */
export interface ReviewDraft {
  /**
   *	User-defined unique identifier for the Review.
   *
   */
  readonly key?: string
  /**
   *	If set, this value must be unique among Reviews.
   *	For example, if you want to have only one Review per Customer and per Product, you can set the value to Customer `id` + Product `id`.
   *
   */
  readonly uniquenessValue?: string
  /**
   *	Language in which the content of the Review is written.
   *
   *
   */
  readonly locale?: string
  /**
   *	Name of the author.
   *
   *
   */
  readonly authorName?: string
  /**
   *	Title of the Review.
   *
   *
   */
  readonly title?: string
  /**
   *	Content of the Review.
   *
   *
   */
  readonly text?: string
  /**
   *	Identifies the target of the Review. Can be a [Product](ctp:api:type:Product) or a [Channel](ctp:api:type:Channel), specified as [ProductResourceIdentifier](ctp:api:type:ProductResourceIdentifier) or [ChannelResourceIdentifier](ctp:api:type:ChannelResourceIdentifier), respectively.
   *
   */
  readonly target?: ProductResourceIdentifier | ChannelResourceIdentifier
  /**
   *	State of the Review. Used for approval processes, see [Review approval process](/../tutorials/review-ratings#review-approval-process) for details.
   *
   *
   */
  readonly state?: StateResourceIdentifier
  /**
   *	Rating of the targeted Product or Channel.
   *	This rating can represent the number of stars, a percentage, or a like (+1)/dislike (-1).
   *	A rating is used in the ratings statistics of the targeted object, unless the Review is in a State that does not have the role `ReviewIncludedInStatistics`.
   *
   */
  readonly rating?: number
  /**
   *	Customer who created the Review.
   *
   *
   */
  readonly customer?: CustomerResourceIdentifier
  /**
   *	Custom Fields for the Review.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface ReviewPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
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
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	[Reviews](ctp:api:type:Review) matching the query.
   *
   *
   */
  readonly results: Review[]
}
export interface ReviewRatingStatistics {
  /**
   *	Average rating of one target
   *	This number is rounded with 5 decimals.
   *
   */
  readonly averageRating: number
  /**
   *	Highest rating of one target
   *
   */
  readonly highestRating: number
  /**
   *	Lowest rating of one target
   *
   */
  readonly lowestRating: number
  /**
   *	Number of ratings taken into account
   *
   */
  readonly count: number
  /**
   *	Full distribution of the ratings.
   *	The keys are the different ratings and the values are the count of reviews having this rating.
   *	Only the used ratings appear in this object.
   *
   */
  readonly ratingsDistribution: any
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Review](ctp:api:type:Review).
 *
 */
export interface ReviewReference extends IReference {
  readonly typeId: 'review'
  /**
   *	Unique identifier of the referenced [Review](ctp:api:type:Review).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Review. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Reviews.
   *
   *
   */
  readonly obj?: Review
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [Review](ctp:api:type:Review). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface ReviewResourceIdentifier extends IResourceIdentifier {
  readonly typeId: 'review'
  /**
   *	Unique identifier of the referenced [Review](ctp:api:type:Review). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Review](ctp:api:type:Review). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
export interface ReviewUpdate {
  /**
   *	The expected version of the review on which the changes should be applied. If the expected version does not match the actual version, a 409 Conflict will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	The list of update actions to be performed on the review.
   *
   *
   */
  readonly actions: ReviewUpdateAction[]
}
export type ReviewUpdateAction =
  | ReviewSetAuthorNameAction
  | ReviewSetCustomFieldAction
  | ReviewSetCustomTypeAction
  | ReviewSetCustomerAction
  | ReviewSetKeyAction
  | ReviewSetLocaleAction
  | ReviewSetRatingAction
  | ReviewSetTargetAction
  | ReviewSetTextAction
  | ReviewSetTitleAction
  | ReviewTransitionStateAction
export interface IReviewUpdateAction {
  /**
   *
   */
  readonly action: string
}
export interface ReviewSetAuthorNameAction extends IReviewUpdateAction {
  readonly action: 'setAuthorName'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly authorName?: string
}
export interface ReviewSetCustomFieldAction extends IReviewUpdateAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ReviewSetCustomTypeAction extends IReviewUpdateAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Review with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Review.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Review.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ReviewSetCustomerAction extends IReviewUpdateAction {
  readonly action: 'setCustomer'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly customer?: CustomerResourceIdentifier
}
export interface ReviewSetKeyAction extends IReviewUpdateAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
export interface ReviewSetLocaleAction extends IReviewUpdateAction {
  readonly action: 'setLocale'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly locale?: string
}
/**
 *	This update action produces the [ReviewRatingSet](ctp:api:type:ReviewRatingSetMessage) Message.
 *
 */
export interface ReviewSetRatingAction extends IReviewUpdateAction {
  readonly action: 'setRating'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly rating?: number
}
export interface ReviewSetTargetAction extends IReviewUpdateAction {
  readonly action: 'setTarget'
  /**
   *	Value to set, specified as [ProductResourceIdentifier](ctp:api:type:ProductResourceIdentifier) or [ChannelResourceIdentifier](ctp:api:type:ChannelResourceIdentifier), respectively. If empty, any existing value will be removed.
   *
   *
   */
  readonly target: ProductResourceIdentifier | ChannelResourceIdentifier
}
export interface ReviewSetTextAction extends IReviewUpdateAction {
  readonly action: 'setText'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly text?: string
}
export interface ReviewSetTitleAction extends IReviewUpdateAction {
  readonly action: 'setTitle'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly title?: string
}
/**
 *	Transition to a new State. This update action produces the [Review State Transition](ctp:api:type:ReviewStateTransitionMessage) Message.
 *
 */
export interface ReviewTransitionStateAction extends IReviewUpdateAction {
  readonly action: 'transitionState'
  /**
   *	Value to set. If there is no State yet, the new State must be an initial State. If the existing State has `transitions` set, there must be a direct transition to the new State. If `transitions` is not set, no validation is performed. If the new State does not have the [role](ctp:api:type:StateRoleEnum) `ReviewIncludedInStatistics`, the Review is not taken into account in the ratings statistics of the target.
   *
   *
   */
  readonly state: StateResourceIdentifier
  /**
   *	Switch validations on or off.
   *
   *
   */
  readonly force?: boolean
}
