const router = require("express").Router()
const bcrypt = require("bcryptjs")
const User = require("./signUpModel")
const jwt = require("jsonwebtoken")


router.post('/register', async (req, res, next)=>{
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
            password: await bcrypt.hash(password, 10)
        })

        res.status(201).json(newUser)
    }
    catch(err){
        next(err)
    }
})

module.exports = router;