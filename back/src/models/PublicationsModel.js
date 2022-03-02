const {Schema,model} = require('mongoose')

const publicationSchema = new Schema ({

  title: {
    type: String,
    required: 'Titulo obligatorio',
    trim: true,
    required: 'Tiutlo obligatorio'
  },

  description: {
    type: String,
    trim: true,
    required: 'Descripcion obligatoria'
  },
  
  location: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: 'Fecha obligatoria',
  },

  participants: {
    type: Number,
    required: 'Número de participantes obligatorio',
    max: [20,"Demasiadas personas"]
  },
  
  price: {
    type: Number,
    required: 'Precio obligatorio',
  },

  city: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  sport: {
    type: Schema.Types.ObjectId,
    ref: 'Sport'
  }
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