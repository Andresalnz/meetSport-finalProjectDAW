const {Schema,model} = require('mongoose')

const locationSchema = new Schema ({
  name: {
    type: String,
    trim: true
  },

  user: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],

  //usuarios:{},
  //publicaciones:{}
})

locationSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const location = model('Location',locationSchema)

module.exports = location