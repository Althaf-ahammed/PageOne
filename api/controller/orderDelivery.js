const books = require("../model/books")
const order = require("../model/order")

const orderDelivery = async(req,res)=>{
    const {_id,Quantity,bookId} = req.body

    const updateStatus = await order.findByIdAndUpdate(_id,{
        Status:'Deliverd'
    })
    res.json('updated')
}
module.exports = orderDelivery