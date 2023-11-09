import { UpdateAction } from '@commercetools/sdk-client-v2'

const validityActions = ['setValidFrom', 'setValidUntil']

const isValidityActions = (actionName: string) =>
  validityActions.includes(actionName)

export default function combineValidityActions(
  actions: Array<UpdateAction> = []
) {
  const [setValidFromAction, setValidUntilAction] = actions.filter((item) =>
    isValidityActions(item.action)
  )
  if (setValidFromAction && setValidUntilAction) {
    return [
      ...actions.filter((item) => !isValidityActions(item.action)),
      {
        action: 'setValidFromAndUntil',
        validFrom: setValidFromAction.validFrom,
        validUntil: setValidUntilAction.validUntil,
      },
    ]
  }
  return actions
}
