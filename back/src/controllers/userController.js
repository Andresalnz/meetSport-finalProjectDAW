const { application } = require('express')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const bcrypt = require ('bcrypt')
const locationModel = require('../models/LocationModel')

//list users
router.get('/', (request, response, next) => {
  userModel.find({})
    .populate('publications')
    .then(result => {
      response.send(result)
    })
    .catch(error => {
      next(error.name)
    })
})

//search user by id
router.get('/:id', (request, response, next) => {
  const {id} = request.params
  userModel.findById({_id:id})
    .then(result => {
      response.status(200).send(result)
    })
    .catch(error => {
      next(error.name)
    })
})


//Create user
router.post('/signup', async (request, response, next) => {
  const {body} = request
  const {username, password, mail, sports, image, locationId} = body

  //options bcrypt password
  const salt = 10
  const passwordHash = await bcrypt.hash(password, salt)

  const location = await locationModel.findOne({name:locationId})

  const newUser = new userModel({
    username,
    passwordHash,
    mail,
    location,
    sports,
    image,
    locationId: location._id
  })

  try {
    const savedUser = await newUser.save()
    location.user = location.user.concat(savedUser)
    await location.save()
    response.status(200).send(savedUser)
  } catch (error) {
    next(error.name)
  }
})

//Update user
router.put('/account', (request, response) => {
  const {body} = request
  const {id, username, mail, location, sports} = body
  const options = { new: true, rawResult: false } //rawResult: Para verificar que mongoDB encontró y actualizó el documento
  const filter = { _id:id }
  const updateUser = {
    username,
    mail,
    location,
    sports
  } 
  userModel.findOneAndUpdate(filter, updateUser, options)
    .then(result => { 
      response.status(200).send(result) 
    })
    .catch(error => { response.send(error.name) })
})


//Delete user
router.delete('/delete', (request,response, next) => {
  const {id} = request.body
  userModel.findByIdAndDelete({_id:id})
    .then(result => { 
      response.status(200).send(result)
     })
    .catch(error => next(error))
})


//search user by name or sport
router.get('/:search',(request, response) => {
  const {search} = request.params
  userModel.find({$or:[{username:search},{sports:search}]})
    .then(result => { 
      response.status(200).send(result) 
    })
    .catch(err => { response.send(err.name) })
})

module.exports = router

