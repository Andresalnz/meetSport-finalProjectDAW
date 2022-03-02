const router = require('express').Router()
const mongoose = require('mongoose')
const userToken = require('../middleware/userToken')
const publicationModel = require('../models/PublicationsModel')
const userModel = require('../models/UserModel')
const sportModel = require('../models/SportsModel')
const locationModel = require('../models/LocationModel')

//Create new publication
router.post('/new', userToken, async  (request, response, next) => {
  const {body} = request
  const {title,
    description,
    place,
    location,
    date,
    hour,
    participants,
    price,
    userId,
    sportId,
    cityId} = body

  const user = await userModel.findById(userId)
  const sport = await sportModel.findOne({name:sportId})
  const city = await locationModel.findOne({name:cityId})
  
  const newPublication = new publicationModel({
    title,
    description,
    place,  
    location,
    date: date + ' ' + hour,
    participants,
    price,
    user: user._id,
    sport: sport._id,
    city:city._id
  })
  
try {
  const savedPublication = await newPublication.save()
  sport.publications = sport.publications.concat(savedPublication)
  user.publications = user.publications.concat(savedPublication)
  city.publications = city.publications.concat(savedPublication)
  await sport.save()
  await city.save()
  await user.save()
  response.status(200).send(savedPublication)
} catch (error) {
  next(error)
}
 })


//List all publications
router.get('/', (request, response, next) => {
  publicationModel.find({})
    .populate('user').populate('sport').populate('city')
    .then(result => {
       response.status(200).send(result)
    })
    .catch(error => { next(error) }) 
})

//Update publication
router.put('/update', userToken, (request, response,next) => {
  const {body} = request
  const {id,
        title,
        description,
        location,
        date,
        hour,
        participants} = body

  const options = { new: true, rawResult: true } //rawResult: Para verificar que mongoDB encontró y actualizó el documento
  const filter = { _id:id }

  const updatePublication = {
    title,
    description,
    location,
    date,
    hour,
    participants
  }

  publicationModel.findOneAndUpdate(filter, updatePublication, options)
    .then(result => {
      response.status(200).send(result)
    })
    .catch(error => { next(error) })
})

//Delete publication
router.delete('/delete', userToken, (request,response,next) => {
  const {id} = request.body
  const filter = { _id:id }  
  const options = { new: true, rawResult: true } //rawResult: Para verificar que mongoDB encontró y borró el documento   

  publicationModel.findByIdAndDelete(filter,options)
    .then(result => { 
      response.status(200).send(result) 
    })
    .catch(error => { next(error) })
})


//Only a Publicaton by id for detail
router.get('/:id', (request, response) => {
  const {id} = request.params
  publicationModel.findById(id)
    .then(result => {
      response.send(result)
    })
    .catch(error => { next (error) })
})


 module.exports = router