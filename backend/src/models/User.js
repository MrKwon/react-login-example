module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: false, // 필수 입력
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false // 필수 입력
    },
    nick: {
      type: DataTypes.STRING(15),
      allowNull: false // 필수 입력
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return User
}