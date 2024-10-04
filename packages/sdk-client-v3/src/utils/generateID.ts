export default function generateID() {
  // @ts-ignore
  const str = ([1e6] + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: number) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
  )

  return 'abcdef'[Math.floor(Math.random() * 'abcdef'.length)] + '' + str
}
