const publicationModel = require('../models/PublicationsModel')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const mongoose = require('mongoose')



router.post('/new', async  (request, response, next) => {
  console.log("nueva publicacion")
  const {body} = request
  console.log(body)
  const {title,
    description,
    place,
    location,
    date,
    participants,
    price,
    user
  } = body
    
  const userId = await userModel.findById(user)
  console.log(user);
  const newPublication = new publicationModel({
    title,
    description,
    place,  
    location,
    date,
    participants,
    price,
    user
  })
  
  
  newPublication.save()
  .then(result => { 
    response.status(200).send(result)
   })
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

router.get('/', (request, response, next) => {
  publicationModel.find()
  .then(result => {
    response.send(result)
  })
  .catch(err => {
    next(err.name)
  })
})

 module.exports = router