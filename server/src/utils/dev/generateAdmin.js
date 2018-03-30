var mongoose = require("mongoose");
require('../../models/User')


//Connect to database
mongoose.Promise = global.Promise;
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/portfolio', function(err){
  if(err) {
    throw err;
  }else{
    var User = mongoose.model("User")
    User.findOne({"admin":true}, function(err, findedUser){
    console.log(findedUser)
    if(!findedUser){
        var user = new User({name:"admin",username:"admin",
        email:"admin@admin.com",
        password:"$2a$10$428iWE67cAFfWTfbvLWAE.YvNYtdzM/aD66d.sEDDpX16IqKPTLGC",
        admin:true,})
        user.save().catch(e=>{throw e})
        }
    })
  }
})

 