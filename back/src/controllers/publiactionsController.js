const publicationModel = require('../models/PublicationsModel')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const mongoose = require('mongoose')



router.post('/new',  (request, response, next) => {
  console.log("nueva publicacion")
  const {body} = request
  console.log(body)
  const {title,
    description,
    place,
    location,
    date,
    participants,
    price} = body
    //dia, mes, año y hora en date
  const newPublication = new publicationModel({
    title,
    description,
    place,
    location,
    date,
    participants,
    price
  })
  //El formateo de la fecha se hace en el front o en el back o en los dos?
  newPublication.save().then(result => { response.status(200).send(result) })
  .catch(error => { next(error) })
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
    response.send(result)
  })
  .catch(err => { response.send (err.name) }) 
})


router.put('/update', (request, response) => {
  const {body} = request
  const { id,
          title,
          description,
          location,
          date,
          hour,
          participants,
        } = body
  const newPublicationInfo = {
    id,
    title,
    description,
    location,
    date,
    hour,
    participants
    }
  publicationModel.findOneAndUpdate({_id:id}, newPublicationInfo)
  .then(result => {
    response.send(result)
  })
  .catch(error => {
    response.status(400).send(error.name)
  })
})


router.delete('/delete', (request,response) => {
  const {id} = request.body
  publicationModel.findByIdAndDelete({_id:id})
  .then(result => { response.status(202).send(result) })
  .catch(err => { response.status(404).send("no se ha borrado") })
})
 module.exports = router