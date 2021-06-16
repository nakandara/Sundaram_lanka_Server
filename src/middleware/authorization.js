const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = async(req,res,next)=>{
  console.log('adf  '+req.header("token"));
    try {        
        const jwtToken = req.header('token')
        if(!jwtToken){
            return res.status(403).json("not Autorized-No token in header")
        }
        
        console.log(jwtToken);
        const payload = jwt.verify(jwtToken,process.env.jwtSecret)
        req.user = payload.user

    } catch (err) {
        console.log(err.messsage);
        
       return res.status(403).json("not Autorized-Header is avl but some error")
    }
    next()
}