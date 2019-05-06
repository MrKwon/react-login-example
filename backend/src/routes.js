module.exports = (app) => {
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
}