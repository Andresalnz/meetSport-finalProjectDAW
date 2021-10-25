const {Schema,model} = require('mongoose')

const userSchema = new Schema ({
  username:String,
  name: String,
  mail:String,
  password:String,
  ubicacion:String,
  deportes: String,
  //image:String,
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