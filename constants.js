module.exports = {
  sampleRate: 44100,
  minFrequency: 500,
  maxFrequency: 1000,
  get permittedFrequencies () {
    const frequencies = []
    for (var i = this.minFrequency; i <= this.maxFrequency; i++) {
      frequencies.push(i)
    }
    return frequencies
  },
  get networkInputs () {
    return 2
  },
  get networkOutputs () {
    // max period in samples
    // const maxPeriod = (1 / this.minFrequency) * this.sampleRate
    // return Math.round(maxPeriod)
    return 1
  },
  normalizeFrequency (frequency) {
    return (frequency - this.minFrequency) / (this.maxFrequency - this.minFrequency)
  }
}
