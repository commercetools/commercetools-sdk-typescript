// Array of action groups which need to be allowed or ignored.
// Example:
// [
//   { type: 'base', group: 'ignore' },
//   { type: 'prices', group: 'allow' },
//   { type: 'variants', group: 'ignore' },
// ]
import { ActionGroup } from '@commercetools/sdk-client-v2'

export default function createMapActionGroup(
  actionGroups: Array<ActionGroup> = []
) {
  return function mapActionGroup(type: string, fn: () => any) {
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
