const AuthController = require('./controllers/AuthContorller')
const AuthControllerPolicy = require('./policies/AuthContorllerPolicy')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })
  
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register
  )
}