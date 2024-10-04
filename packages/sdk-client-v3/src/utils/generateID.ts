export default function generateID() {
  // @ts-ignore
  return ([1e6] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>
    (
      parseInt(c) ^
      (Math.floor(Math.random() * 256) & (15 >> (parseInt(c) / 4)))
    ).toString(16)
  )
}
