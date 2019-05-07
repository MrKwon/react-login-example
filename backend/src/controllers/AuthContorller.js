const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_MONTH = 60 * 60 * 24 * 30
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_MONTH
  })
}

module.exports = {
  async register (req, res) {
    try {
      const { email, password, nick } = req.body
      const hashPassword = await bcrypt.hash(password, 12)
      const user = await User.create({
        email: email,
        password: hashPassword,
        nick: nick
      })
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(400).send({
        error: '이 이메일 주소는 이미 사용 중 입니다.'
      })
    }
  }
}