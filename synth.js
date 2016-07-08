const constants = require('./constants')
const SineOscillator = require('./sine')
const loop = require('./loop')

class Synth {
  constructor (network) {
    this.network = network
  }

  generate (frequency, sampleCount, volume = 1) {
    // if (frequency < constants.minFrequency || frequency > constants.maxFrequency) {
    //   throw new Error("Can't generate a tone outside the frequencyuency range")
    // }
    const normalizedFrequency = constants.normalizeFrequency(frequency)
    const sine = new SineOscillator(frequency)

    // get network output
    var xs = sine.xs()
    var samples = xs.map((x) => this.network.activate([normalizedFrequency, x]))
    for (var i = 0; i < 3; i++) {
      samples = samples.map((sample) => this.network.activate([normalizedFrequency, sample]))
    }

    // translate samples from [0, 1] to [-1, 1]
    samples = samples.map((sample) => (sample * 2) - 1)

    // apply volume
    samples = samples.map((sample) => sample * volume)

    // loop samples
    samples = loop(samples, sampleCount)

    return samples
  }
}

module.exports = Synth
