require('dotenv').config()
const database = require('./database')
const server  = require('./server')
const express = require('express')
const app = server()

const userRouter = require('./controllers/userController')
const publicationsRouter = require('./controllers/publiactionsController')
const cors = require('cors')
const handleError = require ('./middleware/handleError')

database()

app.use (express.json());
//app.use(express.static('public'))
app.use(cors({
  origin: ['http://localhost:3000']
}));


app.use ('/user', userRouter)
//app.use('/publications', publicationsRouter)
app.use(handleError)

