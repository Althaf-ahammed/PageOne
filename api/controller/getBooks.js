const books = require("../model/books")

const getBooks = async(req,res)=>{
    let Title = req.params.title 
    if(Title){
        if(Title==='non-fiction'||Title==='fiction'||Title==="children's book"){
            const Allbooks = await books.find({Category:Title})
            res.json(Allbooks)
        }
        else if(Title==='all'){
            const Allbooks = await books.find({})
            res.json(Allbooks)
        }else{
            const Allbooks = await books.find({Title:Title})
            res.json(Allbooks)
        }
    }else{
        const Allbooks = await books.find({})
        res.json(Allbooks)
    }
}
module.exports = getBooks