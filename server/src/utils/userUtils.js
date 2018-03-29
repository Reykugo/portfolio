
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const User = mongoose.model("User");
const config = require("../utils/config");


const user = {
    /** 
     return true if password and confirm_password are identical
    * @param {string} pwd password
    * @param {string} confPwd confirm password
    * @return {boolean}
    **/
    isSamePasswords: function(pwd, confPwd){
        if (pwd == confPwd){
            return true;
        }else{
            return false;
        }
    },

    isClient: function(req, res, next){
        var token = req.body.token || req.query.token || req.headers["x-access-token"] || req.cookies.token;
        if(token){
            jwt.verify(token, config.superSecret, function(err, decoded){
                if(err){
                    console.log(err)
                    return res.status(403).send({success:false, message:"Failed to authenticate token"});
                }else{
                    req.session = decoded;
                    next();
                }
            })
        }else{
            return res.status(403).send({
                sucess: false,
                message: "No token provided"
            })
        }
    },
}

module.exports = user;