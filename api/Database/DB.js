const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = mongoose.connect(process.env.DB_STRING,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        })
        console.log('Database connected');
    }
    catch(error){
        console.log(`Error:${error}`);
        process.exit()
    }
}
module.exports = connectDB