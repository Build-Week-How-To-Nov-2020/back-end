const router = require("express").Router()
require("dotenv").config();
const bcrypt = require("bcryptjs")
const User = require("./UserModel")
const jwt = require("jsonwebtoken")


router.post('/SignUp', async (req, res, next)=>{
    try{
        const {username, password} = req.body
        const user = await User.findBy(username)


        if(user){
            return res.status(409).json({
                message: "Username is already taken"
            })
        }

        const newUser = await User.add({
            username,
            password: await bcrypt.hash(password,10)
        })

        res.status(201).json(newUser)
    }
    catch(err){
        next(err)
    }
})


router.post('/SignIn', async (req, res, next)=> {
    try{
        const {username, password} = req.body
        const existingUser = await User.findBy(username)

        if(!existingUser){
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }
        console.log(existingUser)
        const passwordValid = await bcrypt.compareSync(password, existingUser.password)
        if(!passwordValid) {
            return res.status(401).json({
                message: "That's not the password"
            })
        }
        const token = jwt.sign({
            userID: existingUser.id,
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.json({
            message: `Welcome ${existingUser.username}`
        })

    }
    catch(err){
        next(err)
    }
})








module.exports = router;