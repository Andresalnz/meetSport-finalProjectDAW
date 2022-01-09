const { application } = require('express')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const bcrypt = require ('bcrypt')

//Create user
router.post('/signup', async (request, response, next) => {
  const {body} = request
  const {username, password, mail, location, sports, image} = body
  const salt = 10
  const passwordHash = await bcrypt.hash(password, salt)
  const newUser = new userModel({
    username,
    passwordHash,
    mail,
    location,
    sports,
    image
  })
  //TODO: - Subida de imagen
  newUser.save().then(result => { response.status(200).send(result) })
  .catch(error => { next(error) })
})

//Login user
router.post('/signin',  async (request, response, next) => {
  const {body} = request
  const {username,password} = body
  userModel.find({username:username}).then(result => {
    if (bcrypt.compareSync(password,result[0].passwordHash)){
      response.status(200).send(result)
    } else {
      response.status(401).send('Incorrect Password or username')
    }
  })
  .catch(error => next(error))
})

//Update user
router.put('/account', (request, response) => {
  const {body} = request
  const {id, username, mail, location, sports} = body
  const options = { new: true, rawResult: true } //rawResult: Para verificar que mongoDB encontró y actualizó el documento
  const filter = { _id:id }
  const updateUser = {
    username,
    mail,
    location,
    sports
  } 
  userModel.findOneAndUpdate(filter, updateUser, options)
  .then(result => { response.status(200).send(result) })
  .catch(err => { response.send(err.name) })
})


//Delete user
router.delete('/account', (request,response, next) => {
  const {id} = request.body
  userModel.findByIdAndDelete({_id:id})
  .then(result => { response.status(200).send(result) })
  .catch(error => next(error))
})


//search user by name or sport
router.get('/:search',(request, response) => {
  const {search} = request.params
  userModel.find({$or:[{username:search},{sports:search}]})
  .then(result => { response.status(200).send(result) })
  .catch(err => { response.send(err.name) })
})

module.exports = router

