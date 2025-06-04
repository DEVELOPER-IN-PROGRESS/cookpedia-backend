const users = require('../models/userModel')

exports.registerController = async(req,res) =>{
 console.log(req.body)
 const { email,username , password} = req.body
 try{
    const existingUser = await users.findOne({email})
    console.log(existingUser)
    if(existingUser){
        res.status(401).json('User already Exist')
    }else{
        const newUser = new users({
            username ,
            email,
            password
        })
        await newUser.save()
        res.status(200).json(newUser)
    }

 }catch(error){
    res.status(500).json(error)
 }
}
