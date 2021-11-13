const publicationModel = require('../models/PublicationsModel')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const mongoose = require('mongoose')



router.post('/',  (request, response, next) => {
  const {body} = request
  console.log(body)
  const {requestTitle,
        requestDescription,
        requestLocation,
        requestDate,
        requestHour,
        requestParticipants,
        userId} = body

  //const user = userModel.findById({userId})

  const newPublication = new publicationModel({
    requestTitle,
    requestDescription,
    requestLocation,
    requestDate,
    requestHour,
    requestParticipants,
    //users: user._id
  })

  newPublication.save()
  .then(result => {
    console.log('Si')
    response.status(202).send(result)
    //user.publicationModel = user.publications.concat(newPublication._id)
    //user.save()   
  })
  .catch(err => {
    console.log(err.name)
    //next(error)
  })
})

router.get('/:id', (request, response) => {
  console.log('o')
  const {id} = request.params
  publicationModel.findById(id)
  .then(result => {
    console.log('o')
    response.send(result)
  })
  .catch(err => {
    response.send (err.name)
  })
})

router.get('/', (request, response) => {
  publicationModel.find({}).then(result => {
    console.log(result)
    response.send(result)
  })
  .catch(err => {
    response.send (err.name)
  })
  
})


router.put('/:id', (request, response) => {
  
  const {id} = request.params
  console.log(id)
  const {body} = request
  const {title,
        description,
        location,
        place,
        day,
        hour,
        numberPeople,
        } = body
  const newPublicationInfo = new publicationModel({
    title,
    description,
    location,
    place,
    day,
    hour,
    numberPeople})
  console.log(newPublicationInfo)
  publicationModel.findByIdAndUpdate(id, {newPublicationInfo}, {new: true})
  .then(result => {
    console.log('e')
    response.send(result)
  })
  .catch(error => {
    response.status(400).send(error.name)
  })
})

 module.exports = router