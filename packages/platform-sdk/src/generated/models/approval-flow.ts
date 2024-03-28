/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ApprovalRule, RuleApprover } from './approval-rule'
import { Associate, BusinessUnitKeyReference } from './business-unit'
import { BaseResource, CreatedBy, LastModifiedBy } from './common'
import { OrderReference } from './order'
import { CustomFields, FieldContainer, TypeResourceIdentifier } from './type'

export interface ApprovalFlow extends BaseResource {
  /**
   *	Unique identifier of the Approval Flow.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Approval Flow.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Approval Flow was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	IDs and references that created the ApprovalFlow.
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Date and time (UTC) the Approval Flow was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the ApprovalFlow.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	[Order](ctp:api:type:Order) that needs to be approved.
   *
   *
   */
  readonly order: OrderReference
  /**
   *	[Business Unit](ctp:api:type:BusinessUnit) the Approval Flow belongs to.
   *
   *
   */
  readonly businessUnit: BusinessUnitKeyReference
  /**
   *	Approval Rules that matched the [Order](ctp:api:type:Order).
   *
   *
   */
  readonly rules: ApprovalRule[]
  /**
   *	Indicates whether the Approval Flow is under review, approved, or rejected.
   *
   *
   */
  readonly status: ApprovalFlowStatus
  /**
   *	Present when the [status](ctp:api:type:ApprovalFlowStatus) of the Approval Flow is `Rejected`.
   *
   *
   */
  readonly rejection?: ApprovalFlowRejection
  /**
   *	Existing approvals in the Approval Flow.
   *
   *
   */
  readonly approvals: ApprovalFlowApproval[]
  /**
   *	Associate Roles that can approve according to the approver hierarchy tiers defined in `rules`.
   *	Associates are allowed to reject even after they have given approval, as long as the current approver hierarchy tier still contains their role.
   *
   *
   */
  readonly eligibleApprovers: RuleApprover[]
  /**
   *	Associate Roles required for approval based on the approver hierarchy tiers defined in `rules` across all remaining tiers.
   *
   *
   */
  readonly pendingApprovers: RuleApprover[]
  /**
   *	Associate Roles required for approval based on the approver hierarchy tiers defined in `rules` only for the currently active tier(s).
   *
   *
   */
  readonly currentTierPendingApprovers: RuleApprover[]
  /**
   *	Custom Fields on the Approval Flow.
   *
   *
   */
  readonly custom?: CustomFields
}
export interface ApprovalFlowApproval {
  /**
   *	Associate who approved the [Approval Flow](ctp:api:type:ApprovalFlow).
   *
   *
   */
  readonly approver: Associate
  /**
   *	Date and time (UTC) when the [Approval Flow](ctp:api:type:ApprovalFlow) was approved at.
   *
   *
   */
  readonly approvedAt: string
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [ApprovalFlow](ctp:api:type:ApprovalFlow).
 *
 */
export interface ApprovalFlowPagedQueryResponse {
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
   *	Approval Flows matching the query.
   *
   *
   */
  readonly results: ApprovalFlow[]
}
export interface ApprovalFlowRejection {
  /**
   *	Associate who rejected the [Approval Flow](ctp:api:type:ApprovalFlow).
   *
   *
   */
  readonly rejecter: Associate
  /**
   *	Date and time (UTC) when the [Approval Flow](ctp:api:type:ApprovalFlow) was rejected at.
   *
   *
   */
  readonly rejectedAt: string
  /**
   *	The reason for the rejection of the [Approval Flow](ctp:api:type:ApprovalFlow).
   *
   *
   */
  readonly reason?: string
}
/**
 *	Indicates whether the [Approval Flow](ctp:api:type:ApprovalFlow) is under review, approved, or rejected.
 *
 */
export type ApprovalFlowStatus = 'Approved' | 'Pending' | 'Rejected' | string
export interface ApprovalFlowUpdate {
  /**
   *	Expected version of the [Approval Flow](ctp:api:type:ApprovalFlow) to which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the [Approval Flow](ctp:api:type:ApprovalFlow).
   *
   *
   */
  readonly actions: ApprovalFlowUpdateAction[]
}
export type ApprovalFlowUpdateAction =
  | ApprovalFlowApproveAction
  | ApprovalFlowRejectAction
  | ApprovalFlowSetCustomFieldAction
  | ApprovalFlowSetCustomTypeAction
/**
 *	This update action allows an [Associate](ctp:api:type:Associate) to approve an Approval Flow. The process takes into account all [Associate Roles](ctp:api:type:AssociateRole) held by the Associate, aligning with the matched [Approval Rules](ctp:api:type:ApprovalRule) and their respective approver hierarchies.
 *
 *	When every required Associate has given their approval, the Approval Flow achieves a fully approved state, automatically updating its status to `Approved`. An Associate is eligible to approve only if their roles are within tiers of the Approval Rule hierarchy that are yet to be fully approved or rejected. As such, an Associate may be able to give their approval more than once.
 *
 */
export interface ApprovalFlowApproveAction {
  readonly action: 'approve'
}
/**
 *	This update action allows an [Associate](ctp:api:type:Associate) to reject an Approval Flow, setting its status to `Rejected`.
 *	The process takes into account all [Associate Roles](ctp:api:type:AssociateRole) held by the Associate, aligning with the matched [Approval Rules](ctp:api:type:ApprovalRule) and their respective approver hierarchies.
 *	Even a single rejection in the process will result in the rejection of the entire Approval Flow.
 *
 *	An Associate is eligible to reject only if their roles are within tiers of the Approval Rule hierarchy that are yet to be rejected. An Associate may alter a prior approval into a rejection.
 *
 */
export interface ApprovalFlowRejectAction {
  readonly action: 'reject'
  /**
   *	The reason for the rejection of the [Approval Flow](ctp:api:type:ApprovalFlow).
   *
   *
   */
  readonly reason?: string
}
export interface ApprovalFlowSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](ctp:api:type:CustomFields).
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
export interface ApprovalFlowSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the ApprovalFlow with [Custom Fields](ctp:api:type:CustomFields).
   *	If absent, any existing Type and Custom Fields are removed from the ApprovalFlow.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](ctp:api:type:CustomFields) fields for the ApprovalFlow.
   *
   *
   */
  readonly fields?: FieldContainer
}
