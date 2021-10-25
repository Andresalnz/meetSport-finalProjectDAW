require('dotenv').config()
const database = require('./database')
const server  = require('./server')
const express = require('express')
const app = server()
const userRouter = require('./controllers/userController')

database()


app.use(express.json());

app.use('/', userRouter)
app.use('/search', userRouter)