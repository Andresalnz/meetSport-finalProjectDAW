const router = require('express').Router()
const sportModel = require('../models/SportsModel')

//list Sport 
router.get('/',(request,response,next) => {
  sportModel.find({})
    .populate('publications', {
      sport: 0
    })
    .then(result => {
      response.status(200).send(result)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router