const {Schema,model} = require('mongoose')

const publicationSchema = new Schema ({
  title: String,
  description: String,
  location: String,
  place: String,
  day: Date,
  hour: Date,
  participants: Number,
  users:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

publicationSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const publication = model('Publication', publicationSchema)

module.exports = publication