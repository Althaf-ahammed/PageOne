const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DOB:{type:String},
    Password:{type:String}
})
const admin = mongoose.model('Admin',adminSchema)
module.exports = admin