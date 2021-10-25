const userModel = require('../models/UserModel')
const router = require('express').Router()

//new user
router.post('/signup', (request, response, next) => {
  const {body} = request
  const {username,
        name,
        mail,
        password,
        ubicacion,
        deportes} = body

  const newUser = new userModel({
    username,
    name,
    mail,
    password,
    ubicacion,
    deportes
  })

  newUser.save()
  .then(result => {
    response.send(result)
  })
  .catch(err => {
    console.log(err.name)
    next(error)
  })
})

//search user by name
router.get('/:name',(request, response) => {
  const {name} = request.params
  userModel.find({name:name})
  .then(result => {
    response.status(200).json(result)
  })
  .catch(err => {
    response.send('No hay nada')
  })
})

//Update user


//Delete user

module.exports = router

