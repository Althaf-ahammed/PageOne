const books = require("../model/books")

const search =  async(req,res)=> {
    let {Title} = req.body
    Title = Title.trim()
    const book = await books.find({Title:Title})
    res.json(book)
}
module.exports = search