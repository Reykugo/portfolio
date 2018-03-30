import express from 'express';
import mongoose from 'mongoose';
import isEmpty from 'lodash/isEmpty';

var router = express.Router();
var Data = mongoose.model('Data');


router.get('/homeDescription', (req, res)=>{
    Data.findOne().then((data)=>{
        if(data){
            return res.status(200).send({success:true, homeDescription:data.homeDescription})
        }else{
            return res.status(404).send({error:"not found"});
        }
    })
})

router.post('/homeDescription', (req, res)=>{
    Data.findOne().then((data)=>{
        if(data){
            data.homeDescription = req.body.homeDescription;
            data.save().then( saved_data =>{
                return res.status(200).send({success:true})
            }).catch(e =>{
                return res.status(500).send({error:e});
            })
        }else{
            return res.status(404).send({error:"not found"});
        }
    })
})

module.exports = router;