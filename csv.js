const SimpleCSV = require('simple-csv')

module.exports = {
  save (samples, fileName) {
    const csv = new SimpleCSV()
    const csvLines = samples.map((sample, i) => [i, sample])
    csv.append(csvLines).then(() => {
      csv.write(fileName + '.csv')
    })
  }
}
