const books = require("../model/books")

const deleteBook = async(req,res)=>{
    const id = req.params.id

    const deleted = await books.findByIdAndRemove(id)

    res.json('book deleted')

}
module.exports = deleteBook