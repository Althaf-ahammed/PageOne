const books = require("../model/books")
const cart = require("../model/cart")

const viewbook = async(req,res)=>{ 
    let response = []
    const id = req.params.id
    const data = await cart.find({userId:id})
    for(let i=0;i<data.length;i++){
        const book = await books.findById(data[i].bookId) 
        response.push(book)
    }
    res.json(response)
}
module.exports = viewbook