const constants = require('./constants')

class SineOscillator {
  constructor (frequency = 440, volume = 1, sampleRate = constants.sampleRate) {
    this.frequency = frequency
    this.volume = volume
    this.sampleRate = sampleRate
  }

  get period () {
    return (1 / this.frequency) * this.sampleRate
  }

  xs (sampleCount = Math.round(this.period)) {
    const xs = []
    for (let i = 0; i < sampleCount; i++) {
      let t = i / this.sampleRate // time in seconds
      let x = 2 * Math.PI * this.frequency * t
      xs.push(x)
    }
    return xs
  }

  generate (sampleCount = Math.round(this.period)) {
    const xs = this.xs(sampleCount)
    const samples = xs.map((x) => {
      let y = this.volume * Math.sin(x)
      return { x, y }
    })
    return samples
  }
}

module.exports = SineOscillator
