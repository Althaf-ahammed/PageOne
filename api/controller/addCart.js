const cart = require("../model/cart")

const addCart = async(req,res)=>{
    const {userId,bookId} = req.body
    const book = await cart.find({bookId:bookId})
    console.log(book);
    if(book.length>0){
        res.json('book already added')
    }else{
        const createcart = await cart.create({
            userId,
            bookId
        })
        res.json('added to cart')
    }
}
module.exports = addCart