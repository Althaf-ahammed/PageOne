const jwt = require('jsonwebtoken')

const tokenVerification = (req,res,next)=>{
    let token;
    console.log(req.headers.authorization);
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            jwt.verify(token,process.env.JWT_Secret_code)
            next();
        }catch(error){
            res.status(401)
            res.json('Not authorized')
            throw new Error('No token,not Authorized')
        }
    }
    if(!token){
        res.status(401).send('no token')
        throw new Error('Not Authorized,Token')
    }
}
module.exports = tokenVerification