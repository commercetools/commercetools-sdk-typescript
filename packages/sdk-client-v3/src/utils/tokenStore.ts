export default function store(initVal: any) {
  let value = initVal
  return {
    get: () => value,
    set: (val: any) => {
      return (value = val)
    },
  }
}
