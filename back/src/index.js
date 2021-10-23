require('dotenv').config()
const database = require('./database')
const server  = require('./server')

database()
const app = server()