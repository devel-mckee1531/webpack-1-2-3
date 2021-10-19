const express = require('express')
const path = require('path')
const app = express()
const port = 20202

app.use(express.static('public'))
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.info('start: webpack 1-2-3 sample server')
})
