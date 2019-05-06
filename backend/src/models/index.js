const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

// config 에 저장된 정보를 통해 새로운 Sequelize 생성
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db
)

// db 객체에 sequelize 추가
db.sequelize = sequelize
db.Sequelize = Sequelize

// db 객체에 User 추가
db.User = require('./User')(sequelize, Sequelize)

module.exports = db