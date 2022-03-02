const {Schema,model} = require('mongoose')

//function for validate email
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema ({
  username: {
    type: String,
    required: 'Username is required',
    trim: true,
  },

  passwordHash: {
    type: String,
    required: true
  },

  mail: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },

  sports: [{
    type:[String],
    ref: 'Sport'

  }],

  image: {
    type: String,
    required: false
  },

  publications: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Publication'
  }],
})

userSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const user = model('User',userSchema)

module.exports = user