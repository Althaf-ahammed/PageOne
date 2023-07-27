const cart = require("../model/cart")

const cartDocumentsCount = async(req,res)=>{
    const id = req.params.id
    const count = await cart.countDocuments({userId:id})
    res.json(count)
}
module.exports = cartDocumentsCount