const userModel = require('../models/UserModel')
const router = require('express').Router()

//new user
router.post('/signup', (request, response, next) => {
  const {body} = request
  const {username, name, mail, password, ubicacion, deportes} = body
  const newUser = new userModel({
    username,
    name,
    mail,
    password,
    ubicacion,
    deportes
  })

  newUser.save().then(result => { response.status(200).send(result) })
  .catch(err => { next(error) })
})


//list users
router.get('/',(request, response) => {
  userModel.find({})
  .then(result => { response.status(200).json(result) })
  .catch(err => { response.send(err) })
})



//search user by name
router.get('/:name',(request, response) => {
  const {name} = request.params
  userModel.find({name:name})
  .then(result => { response.status(200).json(result) })
  .catch(err => { response.send(err.name) })
})


//Update user
router.put('/account', (request, response) => {
  const {body} = request
  console.log(body)
  const {id, username, name, mail, ubicacion, deportes} = body
  const newUserInfo = {
    username,
    name,
    mail,
    ubicacion,
    deportes
  } 
  userModel.findOneAndUpdate({_id:id}, newUserInfo)
  .then(result => { response.status(200).send(result) })
  .catch(err => { response.send(err.name) })

})


//Delete user
router.delete('/account', (request,response) => {
  const {id} = request.body
  userModel.findByIdAndDelete({_id:id})
  .then(result => { response.status(202).send(result) })
  .catch(err => { response.status(404).send("no se ha borrado") })
})


module.exports = router

