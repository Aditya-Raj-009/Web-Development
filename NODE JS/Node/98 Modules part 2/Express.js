// first we install express:
// in terminal: npm install express

// go to google> express.js>getting start> hello world: copy code:

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    console.log(req)
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/contact', (req, res) => {
  res.send('Contact')
})
app.get('/map', (req, res) => {
  res.send('map')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

