const { application } = require('express')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const bcrypt = require ('bcrypt')

//Create user
router.post('/signup', async (request, response, next) => {
  const {body} = request
  console.log("nuevo usuario", body)
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
  .catch(err => { next(err) })
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

//list users
router.get('/',(request, response) => {
  userModel.find({})
  .then(result => { response.status(200).json(result) })
  .catch(err => { console.log(err) })
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

