const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const authorization = request.get('authorization')

  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')){
    token  = authorization.split(' ')[1]
  } 
  const decodeToken = jwt.verify(token,process.env.TOKENSECRET)

  if(!token || !decodeToken.id) {
    return response.status(401).send({error:"No tienes token o es invalido"})
  }

  const {id:userId} = decodeToken
  request.userId = userId

  next()
}