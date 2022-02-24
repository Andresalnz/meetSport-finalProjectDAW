const publicationModel = require('../models/PublicationsModel')
const userModel = require('../models/UserModel')
const router = require('express').Router()
const mongoose = require('mongoose')
const userToken = require('../middleware/userToken')



router.post('/new', userToken, async  (request, response, next) => {
  console.log("nueva publicacion")
  const {body} = request
  console.log(body)
  const {title,
    description,
    place,
    location,
    date,
    hour,
    participants,
    price,
    userId
    } = body

  
  const user = await userModel.findById(userId)
    console.log("Soy usuario back ", user)
  const newPublication = new publicationModel({
    title,
    description,
    place,  
    location,
    date: date + ' ' + hour,
    participants,
    price,
    user: user._id
  })
  
try {
  const savedPublication = await newPublication.save()
  user.publications = user.publications.concat(savedPublication)
  await user.save()
  response.status(200).send(savedPublication)
} catch (error) {
  next(error)
}

//   newPublication.save()
//   .then(result => { 
//     console.log('esta es la nueva publicacion',result)
//     user.publications = user.publications.push(result._id)
   
//     response.status(200).send(result)
//    })
//    await user.save()
//   .catch(error => { next(error) })
 })



router.get('/', (request, response, next) => {
  publicationModel.find({}).populate('user').then(result => {
    response.status(200).send(result)
  })
  .catch(error => { next(error) }) 
})


router.put('/history/update', userToken, (request, response,next) => {
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


router.delete('/delete', (request,response,next) => {
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