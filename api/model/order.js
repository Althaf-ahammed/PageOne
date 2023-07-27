const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    bookId:{type:String},
    userId:{type:String},
    Quantity:{type:Number},
    TotalPrice:{type:Number},
    Status:{type:String}
})
const order = mongoose.model('Order',orderSchema)
module.exports = order