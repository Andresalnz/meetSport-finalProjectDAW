const locationModel = require('../models/LocationModel')
const router = require('express').Router()

//list location in Create Account
router.get('/',(request,response,next) => {
  locationModel.find({})
  .then(result => {
    response.status(200).send(result)
  })
  .catch(error => {
    next(error)
  })
})

module.exports = router