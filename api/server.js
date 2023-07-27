const express = require('express')
const router = require('./router/homeRouter')
const cors = require('cors')
const dotenv = require('dotenv')


dotenv.config({path: './.env'})

const app = express()
app.use(express.json())
const connectDB =  require('./Database/DB')
connectDB()

app.use(cors())

app.use('/',router)


const PORT = process.env.PORT || 2000
app.listen(PORT,()=>{console.log(`server is running on the port ${PORT}`)})