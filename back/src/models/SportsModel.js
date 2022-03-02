const {Schema,model} = require('mongoose')

const sportSchema = new Schema ({
  name: {
    type: String,
    trim: true
  },

  publications: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Publication'
  }],
  
  user: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
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