const {Schema,model} = require('mongoose')

const sportSchema = new Schema ({
  name: {
    type: String,
    trim: true
  },

  //usuarios:{},


})

sportSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const sport = model('Sport',sportSchema)

module.exports = sport