const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      nick: Joi.string().min(1).max(15),
    }

    const { error } = Joi.validate(req.body, schema)

    console.log(req.body)

    if (error) {
      console.log(error)
      switch (error.details[0].context.key) {
        case 'email':
          if (!req.body.email || !req.body.password) {
            res.status(400).send({
              error: '가입을 위해 비어있는 칸을 모두 채워주세요.'
            })
          } else {
            res.status(400).send({
              error: '유효한 이메일 주소의 형식이 아닙니다.'
            })
          }
          break
        case 'password':
          res.status(400).send({
            error: `비밀번호는 다음의 규칙들을 따라야합니다.
              <br>
              1. 비밀번호는 영어 대소문자, 숫자만을 포함할 수 있습니다.
              <br>
              2. 비밀번호는 최소 8문자, 최대 32문자로 설정할 수 있습니다.
            `
          })
          break
        case 'nick':
          res.status(400).send({
            error: `닉네임은 최소 1글자 최대 10글자 입니다.`
          })
          break
        default:
          res.status(400).send({
            error: '회원 가입 중 에러 발생'
          })
      }
    } else {
      next()
    }
  }
}