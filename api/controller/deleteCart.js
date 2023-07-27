const cart = require("../model/cart")

const deleteCart = async(req,res)=>{
    const id = req.params.id

    const remove = await cart.deleteOne({bookId:id})
    res.json('cart item deleted')
}
module.exports = deleteCart