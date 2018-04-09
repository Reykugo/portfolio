import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var schema = new Schema({
    profileDescription: {type:String, default:''}
})

exports.model = mongoose.model('Data', schema, 'data');