const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserComSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UserComSchema.pre('save',function(callback){
    let plainPassword = this.password
    bcrypt.hash(plainPassword,10)
    .then(hash=>{
        this.password = hash
        callback()
    })
    .catch(callback)
})

const User = mongoose.model('UserCom', UserComSchema)

module.exports = User;