const books = require("../model/books")

const adminPurchaseBook = async(req,res)=>{
    const purchaseBook  = await books.find({Stock:{$lt:5}})
    res.json(purchaseBook)
    
}
module.exports = adminPurchaseBook