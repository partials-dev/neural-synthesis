const constants = require('./constants')
const SineOscillator = require('./sine')

function sineDataPoints (frequency) {
  const sine = new SineOscillator(frequency)
  var samples = sine.generate()
  // translate the samples from [-1, 1] to [0, 1]
  samples = samples.map(({ x, y }) => {
    y = (y + 1) / 2
    return { x, y }
  })

  // translate the frequency from [minFrequency, maxFrequency] to [0, 1]
  const normalizedFrequency = constants.normalizeFrequency(frequency)

  return samples.map(({ x, y }) => {
    const input = [normalizedFrequency, x]
    const output = [y]
    return { input, output }
  })
}

console.log()
console.log(`Generating training data`)
const data = constants.permittedFrequencies.reduce((allPoints, freq) => {
  const points = sineDataPoints(freq)
  return allPoints.concat(points)
}, [])
console.log(`Generated training data: ${JSON.stringify(data, null, 2)}`)

module.exports = data
