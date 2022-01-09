const {Schema,model} = require('mongoose')

const publicationSchema = new Schema ({
  title: {
    type: String,
    required: 'Titulo obligatorio',
    maxlength: [100, "Pasado el limite de palabras"]
  },
  description: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false,
  },
  hour: {
    type: Date,
    required: false,
  },
  participants: {
    type: Number,
    required: true,
    max: [20,"Demasiadas personas"]
  },
  price: {
    type: Number,
    required: true,
  },
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