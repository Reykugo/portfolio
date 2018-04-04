/**
 This file is used to generate encrypted password to create a admin
*/
const bcrypt = require("bcrypt-nodejs")
const config = require("../config")

var password = process.argv[2]
if(!password == undefined || !password == ""){
    bcrypt.genSalt(config.SALT, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(password, salt, null, function (err, hash) {
            if (err) return next(err);
             console.log(hash);
    
        });
    });
}
