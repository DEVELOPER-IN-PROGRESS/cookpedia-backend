const users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerController = async(req,res) =>{
 console.log(req.body)
 const { email,username , password } = req.body
 try{
    const existingUser = await users.findOne({email})
    console.log(existingUser)
    if(existingUser){
        res.status(401).json('User already Exist')
    }else{
        const hashPassword = await bcrypt.hash(password, 10)
        console.log(hashPassword)

        const newUser = new users({
            username ,
            email,
            password:hashPassword
        })
        await newUser.save()
        res.status(200).json(newUser)
    }

 }catch(error){
    res.status(500).json(error)
 }
}

exports.loginController = async(req,res) =>{
    const { email, password } = req.body
    console.log(req.body)
    try{
        const existingUser = await users.findOne({email});
        if(existingUser){

            console.log(existingUser.password);
            const userPassword = await bcrypt.compare( password , existingUser.password  )
            console.log({userPassword})
            // console.log(process.env.JWT_SECRET)

            if(userPassword){ // == true
                const token = jwt.sign({userId: existingUser.id},process.env.JWT_SECRET)
                console.log(token)
                res.status(200).json({token,existingUser})
            }else{
                res.status(401).json('invalid credentials')
            }
        }else{
            res.status(401).json('Invalid credentials')
        }
    }catch(error){
        res.status(500).json(error)
    }
}

/*
 curl -X POST http://localhost:4000/user-login  -H "Content-Type: application/json" \
 -d '{"username":"","password":""}'
*/