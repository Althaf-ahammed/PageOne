const admin = require("../model/admin")
const user = require("../model/user")
const bcrypt = require('bcrypt')


const userLogin = async(req,res)=>{
    const {Email,Password,adminCheck} = req.body
    const client = adminCheck ? admin : user
    const loggedInUser =  await client.findOne({Email}) 
    if(!Password){
        res.json('Password required')
    }
    if(loggedInUser){
        const passwordCheck = await bcrypt.compare(Password,loggedInUser.Password)
        if(passwordCheck){
            res.json({response:'login successfull',
                userId:loggedInUser._id
            })
        }else{
            res.json({response:'Incorrect password'})
        }
    }else{
        res.json({response:'Account not Exist'})
    }
}
module.exports = userLogin