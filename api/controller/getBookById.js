const books = require("../model/books")

const getBookById = async(req,res) =>{
    const _id = req.params.id
    const bookById = await books.findOne({_id})
    res.json(bookById)
}
module.exports = getBookById