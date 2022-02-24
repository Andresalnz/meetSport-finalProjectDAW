const bcrypt = require ('bcrypt')
const router = require('express').Router()
const userModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')


router.post('/signin',  async (request, response) => {
  const { body } = request
  const { username, password } = body
  const user = await userModel.findOne({username})
  const passwordCorrect = user === null ? false : await bcrypt.compare(password,user.passwordHash)

  if (!(user && passwordCorrect)) {
    response.status(401).send({error:"Invalido"})
  }
  
  const userForToken = {
    id:user._id,
    username:user.username,
  }
  const token = jwt.sign(userForToken,process.env.TOKENSECRET, {
    expiresIn: 60*60*24*7
  })

  response.send({
    username:user.username,
    id: user.id,
    token
  })
})
  module.exports = router