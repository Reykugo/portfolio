const router = require('express').Router();
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const User = mongoose.model("User");
const userUtils = require("../utils/userUtils")
const genericUtils = require("../utils/genericUtils")
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

router.get("/", userUtils.isClient, (req, res) =>{
    Project.find().then((projects) =>{
        return res.status(200).send({projects: projects})
    })
})

router.post("/", userUtils.isClient, (req, res) =>{
    var data = {
        name: req.body.name,
        link: req.body.link,
    }
    if (genericUtils.isParamsAreEmptyOrUndefined(data)){
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