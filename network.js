const synaptic = require('synaptic')
const constants = require('./constants')
const trainingSet = require('./training-set')

console.log()
console.log(`Instantiating an LSTM with ${constants.networkInputs} inputs and ${constants.networkOutputs} outputs`)
const network = new synaptic.Architect.Perceptron(constants.networkInputs, 6, constants.networkOutputs)
console.log(`Network instantiated`)

// train
const trainingOptions = {
  rate: 0.01,
  iterations: 1000,
  error: 0.00011,
  // shuffle: false,
  log: 1
}

console.log(`Instantiating trainer and training data`)
const trainer = new synaptic.Trainer(network)
console.log(`Starting training`)
console.log()

trainer.train(trainingSet, trainingOptions)

module.exports = network
