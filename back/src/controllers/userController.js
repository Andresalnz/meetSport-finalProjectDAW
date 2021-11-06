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
router.put('/', (request, response) => {
  const {body} = request
  console.log(body)
  const {id,name,mail} = body
  const newUserInfo = new userModel({
    name,
    mail
  })
    
    userModel.findByIdAndUpdate({_id:id},newUserInfo)
    .then(result => {
      response.send('Thank')
    })
    .catch(err => {
      response.send(err.name)
    })

})


//Delete user
router.delete('/', (request,response) => {
  const {body} = request
  const {id} = body
  console.log('esto', id)
  userModel.findByIdAndDelete({id})
  .then(result => {
    response.status(202).send(result)
  })
  .catch(err => {
    response.status(404).send("no se ha borrado")
  })
})


module.exports = router

