const { response } = require('express')
const sportModel = require('../models/SportsModel')
const router = require('express').Router()

//Optional: Create new sport. Only admin
router.post('/new', (request, response, next) => {
  console.log('first');
  const {body} = request
  const {name} = body
  const newSport = new sportModel({
    name
  })
  newSport.save()
  .then(result => {
    response.status(200).send(result)
  })
  .catch(error => {
    next(error)
  })

})

//list Sport in Create Account
router.get('/signup',(request,response,next) => {
  sportModel.find({})
  .then(result => {
    response.status(200).send(result)
  })
  .catch(error => {
    next(error)
  })
})

//list Sport in Create Account
router.get('/profile',(request,response,next) => {
  sportModel.find({})
  .then(result => {
    response.status(200).send(result)
  })
  .catch(error => {
    next(error)
  })
})
module.exports = router