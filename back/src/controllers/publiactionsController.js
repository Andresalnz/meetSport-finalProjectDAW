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
  console.log(newPublication);
  //El formateo de la fecha se hace en el front o en el back o en los dos?
  newPublication.save().then(result => { response.status(200).send(result) })
  .catch(error => { next(error) })
})



router.get('/', (request, response, next) => {
  publicationModel.find({}).then(result => {
    response.status(200).send(result)
  })
  .catch(error => { next(error) }) 
})


router.put('/history/update', (request, response,next) => {
  const {body} = request
  const { id,
          title,
          description,
          location,
          date,
          hour,
          participants,
        } = body
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
  .catch(error => {
    next(error)
  })
})


router.delete('history/delete', (request,response,next) => {
  const {id} = request.body
  const filter = { _id:id }  
  const options = { new: true, rawResult: true } //rawResult: Para verificar que mongoDB encontró y borró el documento   
  publicationModel.findByIdAndDelete(filter,options)
  .then(result => { response.status(202).send(result) })
  .catch(error => { next(error)})
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
 module.exports = router