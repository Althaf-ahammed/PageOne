const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    Title:{type:String},
    Author : {type:String},
    PublishedIn :{type:String},
    Genre:{type:String},
    Language:{type:String},
    Category:{type:String},
    Price:{type:Number},
    Stock:{type:Number},
    image: {
        type: String,
        require: true,
      },
    cloudinaryId: {
        type: String,
        require: true,
      }
    
    
})
const books = mongoose.model('Book',booksSchema)
module.exports = books
