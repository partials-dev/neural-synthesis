const header = require('waveheader')
const fs = require('fs')
const constants = require('./constants')

module.exports = {
  save (samples, fileName) {
    const writer = fs.createWriteStream(fileName + '.wav')
    writer.write(header(samples.length, {
      sampleRate: constants.sampleRate,
      channels: 2,
      bitDepth: 32
    }))
    writer.write(Buffer.from(samples))
    writer.end()
  }
}
