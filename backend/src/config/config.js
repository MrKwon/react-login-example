require('dotenv').config()

module.exports = {
  port: process.env.PORT || 7071,
  db: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '159456',
    database: process.env.DB_NAME || 'example',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIAL || 'mysql',
    operatorAliases: false
  },
  authentication: {
    jwtSecret: process.env.JWT_SECREAT || 'secret'
  }
}