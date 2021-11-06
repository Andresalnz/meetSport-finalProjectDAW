require('dotenv').config()
const database = require('./database')
const server  = require('./server')
const express = require('express')
const app = server()
const userRouter = require('./controllers/userController')
const publicationRouter = require('./controllers/publiactionsController')

database()


app.use (express.json());

app.use ('/', userRouter)
app.use ('/search', userRouter)
app.use ('/account', userRouter)
app.use ('/account', userRouter)


app.use('/', publicationRouter)
//app.use('/', publicationRouter)
app.use('/history', publicationRouter)