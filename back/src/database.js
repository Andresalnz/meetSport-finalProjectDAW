const {MONGO_DB_URI} = process.env
const mongoose = require('mongoose')
const uri = MONGO_DB_URI

const databaseConnection  = () => mongoose.connect(uri)
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(err)
})

module.exports = databaseConnection
