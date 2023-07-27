const books = require("../model/books")
const cloudinary = require("../middleware/cloudinary");
const getDataUri = require("../utils/dataUri");

const addBooks = async(req,res)=>{
    const {Title,Author,PublishedIn,Genre,Language,Price,Stock,Category} = req.body
    let cloudinaryImageDetails 
    const file = req.file
    const fileUri = getDataUri(file)    
    const result = await cloudinary.uploader.upload(fileUri.content)
    .then((data)=>{
         cloudinaryImageDetails = data
    }).catch(err=>{
        console.log(err)
    })
    console.log(result);
    const createBooks = await books.create({
        Title,
        Author,
        PublishedIn,
        Genre,
        Language,
        Category,
        Price,
        Stock,
        image: cloudinaryImageDetails.secure_url,
        cloudinaryId: cloudinaryImageDetails.public_id
    }) 
    .then((data)=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
    res.json('book added')
}
module.exports = addBooks