require('dotenv').config()
const database = require('./database')
const server  = require('./server')
const express = require('express')
const app = server()

const userRouter = require('./controllers/userController')
const publicationsRouter = require('./controllers/publiactionsController')
const cors = require('cors')
const handleError = require ('./middleware/handleError')
const sportRouter = require('./controllers/sportsController')
const locationRouter = require('./controllers/locationController')
const loginRouter = require('./controllers/loginController')
database()

app.use (express.json());
//app.use(express.static('public'))
app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use('/',loginRouter)
app.use('/user', userRouter)
app.use('/publication', publicationsRouter)
app.use('/sport',sportRouter)
app.use('/location',locationRouter)
app.use(handleError)

