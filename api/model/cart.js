const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId:{type:String},
    bookId:{type:String}
})
const cart = mongoose.model('Cart',cartSchema)
module.exports = cart