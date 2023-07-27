const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    Name:{type:String},
    Email:{type:String},
    DOB:{type:String},
    Password:{type:String}
})
const user = mongoose.model('User',userSchema)
module.exports = user