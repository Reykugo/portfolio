import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import  mongoose from 'mongoose';

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Require models
require("./models/User");
require("./models/Project");

const api = require("./api/")
app.use("/api", api);


//Connect to database
mongoose.Promise = global.Promise;
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/training-react', function(err){
  if(err) {
    throw err;
  }
})

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
 });

module.exports = app;