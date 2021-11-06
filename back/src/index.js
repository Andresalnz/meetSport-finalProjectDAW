require('dotenv').config()
const database = require('./database')
const server  = require('./server')
const express = require('express')
const app = server()
const userRouter = require('./controllers/userController')
const publicationsRouter = require('./controllers/publiactionsController')
const cors = require('cors')

database()


app.use (express.json());
app.use(cors({
  origin: ['http://localhost:3000']
}));
app.use ('/', userRouter)
app.use ('/search', userRouter)
app.use ('/account', userRouter)

app.use('/publications', publicationsRouter)
//app.use('/', publicationRouter)
// app.use('/history', publicationRouter)


