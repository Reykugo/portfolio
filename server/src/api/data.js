import express from 'express';
import mongoose from 'mongoose';
import isEmpty from 'lodash/isEmpty';
import {isAuthenticate} from '../utils/functions'

var router = express.Router();
var Data = mongoose.model('Data');


router.get('/profileDescription', (req, res)=>{
    Data.findOne().then((data)=>{
        if(data){
            return res.status(200).send({success:true, profileDescription:data.profileDescription})
        }else{
            return res.status(404).send({error:"not found"});
        }
    })
})

router.post('/profileDescription', isAuthenticate, (req, res)=>{
    if(req.session.isAdmin){
        Data.findOne().then((data)=>{
            if(data){
                data.profileDescription = req.body.profileDescription;
                data.save().then( saved_data =>{
                    return res.status(200).send({success:true})
                }).catch(e =>{
                    return res.status(500).send({error:e});
                })
            }else{
                return res.status(404).send({error:"not found"});
            }
        })
    }else{
        return res.status(403).send({error:"Permission denied"})
    }
})


router.post('/skill', isAuthenticate, (req, res) =>{
    if(req.session.isAdmin){
        category = req.body.category;
        skill = req.body.skill;
        if(isEmpty(category) || isEmpty(skill)){
            return res.status(400).send({success:false, error: "Parameters are not correct"})
        }else if(isEmpty(skill.name) || isEmpty(skill.alt) || isEmpty(skill.img)){
            return res.status(400).send({success:false, error: "Parameters are not correct"})
        }else{
            Data.findOne().then((data)=>{
                if(data){
                    if(data.skills[category] === []){
                        data.skills[category] = [skill];
                    }else{
                        data.skills[category].push(skill);
                    }
                    data.save().shen(saved_data =>{
                        return res.status(200).send({success:true});
                    }).catch(e =>{
                        return res.status(500).send({error:e});
                    })
                }else{
                    return res.status(404).send({error:"not found"});
                }
            })
        }  
    }else{
        return res.status(403).send({error:"Permission denied"})
    }
})

module.exports = router;