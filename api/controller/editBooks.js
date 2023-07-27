const books = require("../model/books")

const editBooks = async(req,res)=>{
    const {_id,Title,Author,PublishedIn,Genre,Language,Category,Price,Stock} = req.body

    const updateBook = await books.findByIdAndUpdate(_id,{
        Title,
        Author,
        PublishedIn,
        Genre,
        Language,
        Category,
        Price,
        Stock
    })
    res.json(updateBook)
    console.log('updated');
}
module.exports = editBooks