import express from 'express';
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import config from '../utils/config';
import {isAuthenticate, isParamsAreEmptyOrUndefined} from '../utils/functions';

const Project = mongoose.model('Project');
const User = mongoose.model("User");

var router = express.Router();

router.get("/", isAuthenticate, (req, res) =>{
    Project.find().then((projects) =>{
        return res.status(200).send({projects: projects})
    })
})

router.post("/", isAuthenticate, (req, res) =>{
    var data = {
        name: req.body.name,
        link: req.body.link,
    }
    if (isParamsAreEmptyOrUndefined(data)){
        return res.status(400);
    }
    else if(req.session.isAdmin){
        data.description = req.body.description;
        var project = new Project(data)
        project.save().then((saved_project) =>{
            return res.status(200).send({project: saved_project});
        }).catch((err) =>{
            return res.status(500);
        })
    }else{
        return res.status(403)
    }
})

module.exports = router;