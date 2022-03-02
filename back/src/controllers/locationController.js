const locationModel = require('../models/LocationModel')
const router = require('express').Router()

//list location
router.get('/',(request,response,next) => {
  locationModel.find({})
    .populate('user', {
      username: 1,
      mail: 1,
    })
    .populate('publications', {
      city: 0
    })
    .then(result => {
      response.status(200).send(result)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router