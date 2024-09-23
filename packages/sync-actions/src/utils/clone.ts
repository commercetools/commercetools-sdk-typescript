export default function clone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined
}
