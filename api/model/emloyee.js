const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    Name:{type:String},
    Address:{type:String},
    Position:{type:String},
    Department:{type:String},
    Gender:{type:String},
})
const employee = mongoose.model('Employee',employeeSchema)
module.exports = employee