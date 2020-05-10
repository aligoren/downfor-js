const argv = process.argv
const downFor = require('./src/downfor.js')

const domain = argv.slice(2, 3)

const response = downFor(...domain)

response
  .then(resp => console.log(resp))
  .catch(err => console.log(err))
