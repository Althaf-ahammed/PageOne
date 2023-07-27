const books = require("../model/books")
const order = require("../model/order")
const user = require("../model/user")

const allOrders = async(req,res)=>{
    let response = []
    const data = await order.find({})
    console.log(data);
    for(let i=0;i<data.length;i++){
        const book = await books.findById(data[i].bookId) 
        response.push({'_id':data[i]._id,'bookId':data[i].bookId,'bookTitle':book.Title,'userName':'','Quantity':data[i].Quantity,'Status':data[i].Status,'TotalPrice':data[i].TotalPrice})
    }
    console.log(response);
    for(let i=0;i<data.length;i++){
        const users = await user.findById(data[i].userId) 
        console.log(data[i].userId);
        console.log(users);
        response[i].userName = users.Name
    }
    res.json(response)
}
module.exports = allOrders