//This file is used to instantiate route
//import express from 'express'

var router = require('express').Router();


router.use("/project", require("./project"));
router.use("/authentication",require("./authentication"));

module.exports = router;

