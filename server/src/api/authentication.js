import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../utils/config';
import { isAuthenticate } from '../utils/functions';

const User = mongoose.model("User");

var router = express.Router();


router.post("/", (req, res) =>{
    var data = req.body;
    User.findOne({"username": data.username}, function(err, user){
        if(user){
            user.comparePasswords( data.password, function(err, isMatch){
                if(isMatch){
                    const payload = {
                        isAdmin: user.admin,
                        userId: user.id,
                        username: user.username,
                        email: user.email
                    };
                
                    var token = jwt.sign(payload, config.superSecret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    //res.cookie("token", token, { maxAge: 24*3600*1000, httpOnly: true })
                    // return the information including token as JSON
                    res.status(200).json({token:token, sucess:true}); 
                }else{
                    res.status(400).send("Invalid credential");
                }
            })
        }else{
            res.status(400).send("Invalid credential");
        }
    })
})


//Disconnect user
router.get("/logOut", isAuthenticate, (req, res) =>{
    res.clearCookie("token");
    res.status(200).send({success:true})
})


module.exports = router;