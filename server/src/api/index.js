//This file is used to instantiate route

var router = require('express').Router();

router.use("/project", require("./project"));
router.use("/authentication", require("./authentication"));
router.use('/users', require('./users'));

module.exports = router;

