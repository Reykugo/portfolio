/*
This file is used to create schema of Project for bdd
*/

import mongoose from 'mongoose';
var Schema = mongoose.Schema; //Create mongoose Schema

var schema = new Schema({
    name: {type: String, required: true},
    description: {type:String},
    link: {type:String, required:true},
    createdOn: {type:Date, default: Date.now},
})

exports.model = mongoose.model('Project', schema, 'project');


