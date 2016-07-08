module.exports = function loop (array, length) {
  if (array.length >= length) {
    return array
  }
  const looped = array.slice(0, array.length)
  const difference = length - array.length
  for (var i = 0; i < difference; i++) {
    looped.push(array[i % array.length])
  }
  return looped
}
