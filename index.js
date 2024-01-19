const express = require('express')
const app = express()
var cors = require('cors')
const port =  process.env.PORT || 5000;

const data = require('./data.json')
const details = require('./details.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.send(data)
})
app.get('/details', (req, res) => {
    res.send(details)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})