const admin = require("../model/admin");
const user = require("../model/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async(req,res)=>{
    const {Name,Email,DOB,Password,adminCheck} = req.body
    const client = adminCheck ? admin : user
    const clientDetails = await client.findOne({Email})
    if(!Email || !Password || !Name || !DOB ){
        return res.json('All datas are required')
    }
    if(!clientDetails){
        const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/
        if(!Password.match(passwordFormat)){
            return res.json('Password must contain 6 characters with atleast 1 digit and 1 special character')
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(Password,salt)
        
            const addAdmin = await client.create({
                Name,
                Email,
                DOB,
                Password:hashedPassword
            })
            res.json({
                response:'client added',
                Token:generateToken(addAdmin._id)
            })
            console.log(addAdmin);
    }else{
        return res.json('Account already exist.')
    }
}
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_Secret_code,{expiresIn:'1d'})
}
module.exports = createUser