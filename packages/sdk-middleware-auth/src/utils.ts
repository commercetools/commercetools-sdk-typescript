export default function store(initVal: any) {
  let value = initVal
  return {
    get: () => value,
    set: (val: any) => {
      value = val
      return value
    },
  }
}
