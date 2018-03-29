/*
This file is used to create schema of User for bdd
*/

var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var config = require("../utils/config")
var Schema = mongoose.Schema; //Create mongoose Schema

var schema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required:true},
    email: {type:String, required: true},
    password: {type:String, required:true},
    admin: {type:Boolean, default: false},
    createdOn: {type:Date, default: Date.now},
})

/**
 This function is called before storing user in database
 **/
schema.pre('save', function (next) {
    var user = this;
    // if password is not modified or created
    if (!user.isModified('password')) return next();
    //else...
    bcrypt.genSalt(config.SALT, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

/** 
 Comparing user password and specified password
 * @param {String} candidatePassword Password to compare
 * @return {bool}                    Return true if match else return false
 **/
schema.methods.comparePasswords = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

exports.model = mongoose.model('User', schema, 'user');


