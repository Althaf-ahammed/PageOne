const books = require("../model/books")
const order = require("../model/order")

const addOrder = async(req,res)=>{
    const {id,Price,Quantity,userId} = req.body
    console.log(req.body);
    const status = 'pending'
    console.log('price',Price);
    const TotalPrice =  Number(Price) * Quantity
    console.log('total',TotalPrice);
    const CreateOrder = await order.create({
        bookId:id,
        userId:userId,
        Quantity,
        Status:status,
        TotalPrice:TotalPrice
    })
    res.json('order generated')
}
module.exports = addOrder