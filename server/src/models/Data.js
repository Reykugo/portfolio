var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var schema = new Schema({
    profileDescription: {type:String, default:''},
    skills: {type:Object, default:{}},
    experiences: {type:Array, default:[]}
})

exports.model = mongoose.model('Data', schema, 'data');