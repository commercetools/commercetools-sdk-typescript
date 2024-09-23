import { Delta, getDeltaValue } from './diffpatcher'

import { UpdateAction } from '../types/update-actions'

const Actions = {
  setCustomType: 'setCustomType',
  setCustomField: 'setCustomField',
}

const hasSingleCustomFieldChanged = (diff: Delta) => Array.isArray(diff.custom)
const haveMultipleCustomFieldsChanged = (diff: Delta) =>
  Boolean(diff.custom.fields)
const hasCustomTypeChanged = (diff: Delta) => Boolean(diff.custom.type)
const extractCustomType = (diff: Delta, previousObject: any) =>
  Array.isArray(diff.custom.type)
    ? getDeltaValue(diff.custom.type, previousObject)
    : diff.custom.type
const extractTypeId = (type: any, nextObject: any) =>
  Array.isArray(type.id) ? getDeltaValue(type.id) : nextObject.custom.type.id
const extractTypeKey = (type: any, nextObject: any) =>
  Array.isArray(type.key) ? getDeltaValue(type.key) : nextObject.custom.type.key
const extractTypeFields = (diffedFields: any, nextFields: any) =>
  Array.isArray(diffedFields) ? getDeltaValue(diffedFields) : nextFields
const extractFieldValue = (newFields: any, fieldName: string) =>
  newFields[fieldName]

export default function actionsMapCustom(
  diff: Delta,
  newObj: any,
  oldObj: any,
  customProps: { actions: any; priceId?: string } = {
    actions: {},
  }
) {
  const actions: Array<UpdateAction> = []
  const { actions: customPropsActions, ...options } = customProps
  const actionGroup = { ...Actions, ...customPropsActions }

  if (!diff.custom) return actions
  if (hasSingleCustomFieldChanged(diff)) {
    // If custom is not defined on the new or old category
    const custom = getDeltaValue(diff.custom, oldObj)
    actions.push({ action: actionGroup.setCustomType, ...options, ...custom })
  } else if (hasCustomTypeChanged(diff)) {
    // If custom is set to an empty object on the new or old category
    const type = extractCustomType(diff, oldObj)

    if (!type) actions.push({ action: actionGroup.setCustomType, ...options })
    else if (type.id)
      actions.push({
        action: actionGroup.setCustomType,
        ...options,
        type: {
          typeId: 'type',
          id: extractTypeId(type, newObj),
        },
        fields: extractTypeFields(diff.custom.fields, newObj.custom.fields),
      })
    else if (type.key)
      actions.push({
        action: actionGroup.setCustomType,
        ...options,
        type: {
          typeId: 'type',
          key: extractTypeKey(type, newObj),
        },
        fields: extractTypeFields(diff.custom.fields, newObj.custom.fields),
      })
  } else if (haveMultipleCustomFieldsChanged(diff)) {
    const customFieldsActions = Object.keys(diff.custom.fields).map((name) => ({
      action: actionGroup.setCustomField,
      ...options,
      name,
      value: extractFieldValue(newObj.custom.fields, name),
    }))
    actions.push(...customFieldsActions)
  }

  return actions
}
