const jwt = require('jsonwebtoken');

const jwtMiddleware = async(req,res,next) =>{


    // console.log(req.headers);
    const token = req.headers['authorization'].split(' ')[1];
    console.log({token})

 if(token){
    try{
    const response =  jwt.verify(token, process.env.JWT_SECRET);
    console.log(response);
    const { userId } = response;
    console.log(userId)
    req.payload = userId;
    next();
    }catch(error){
    res.status(500).json(error)
 }
}else{
res.status(404).json('authentication failed');
}

}

module.exports = jwtMiddleware;
