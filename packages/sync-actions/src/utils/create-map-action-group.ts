// Array of action groups which need to be allowed or ignored.
// Example:
// [
//   { type: 'base', group: 'ignore' },
//   { type: 'prices', group: 'allow' },
//   { type: 'variants', group: 'ignore' },
// ]
import { ActionGroup, UpdateAction } from '@commercetools/sdk-client-v2'

export type MapActionGroup = (
  type: string,
  fn: () => Array<UpdateAction>
) => Array<UpdateAction>

export type MapActionResult = (
  diff: any,
  newObj: any,
  oldObj: any,
  config?: any
) => Array<UpdateAction>

export type ActionMapBase = (
  diff: any,
  oldObj: any,
  newObj: any,
  config?: { shouldOmitEmptyString?: boolean; [key: string]: any }
) => Array<UpdateAction>

export default function createMapActionGroup(
  actionGroups: Array<ActionGroup> = []
): MapActionGroup {
  return function mapActionGroup(
    type: string,
    fn: () => Array<UpdateAction>
  ): Array<UpdateAction> {
    if (!Object.keys(actionGroups).length) return fn()

    const found = actionGroups.find((c) => c.type === type)
    if (!found) return []

    // Keep `black` for backwards compatibility.
    if (found.group === 'ignore' || (found as any).group === 'black') return []
    // Keep `white` for backwards compatibility.
    if (found.group === 'allow' || (found as any).group === 'white') return fn()

    throw new Error(
      `Action group '${found.group}' not supported. Use either "allow" or "ignore".`
    )
  }
}
