module.exports = function () {
  let count = 0
  return () => {
    return ++count
  }
}
