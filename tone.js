const constants = require('./constants')

module.exports = {
  generate (freq = 440, duration, volume = 1, sampleRate = constants.sampleRate) {
    var toneData = []
    var t
    for (var i = 0; i < duration; i++) {
      t = i / sampleRate // time in seconds
      toneData[i] = volume * Math.sin(2 * Math.PI * freq * t)
    }

    return toneData
  }
}
