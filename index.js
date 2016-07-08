const network = require('./network')
const NeuralSynth = require('./synth')
const tone = require('./tone')
const constants = require('./constants')

const csv = require('./csv')
const wav = require('./wav')

const synth = new NeuralSynth(network)

const freq = 200
const sampleCount = 10 * constants.sampleRate
const experiment = synth.generate(freq, sampleCount, 30)
const control = tone.generate(freq, sampleCount, 30)
const error = experiment.map((val, i) => experiment[i] - control[i])

console.log('Experiment complete:')
// console.log(`Control data: ${JSON.stringify(control, null, 2)}`)
// console.log(`Experiment data: ${JSON.stringify(experiment, null, 2)}`)
console.log(`Error: ${JSON.stringify(error, null, 2)}`)

console.log(`Saving .csv files`)
csv.save(experiment, './data/synth-c-major')
csv.save(control, './data/c-major')

console.log(`Saving .wav files`)
wav.save(experiment, './data/synth-c-major')
wav.save(control, './data/c-major')
