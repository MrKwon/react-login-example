// express bodyparser cors morgan
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

app.post('/register', (req, res) => {
  console.log(req.body)
  res.send({
    message: `Hello ${req.body.email}, Sign Up Success !`
  })
})

app.listen(process.env.PORT || 7071)