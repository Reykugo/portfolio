const router = require('express').Router();

router.post("/", (req, res) =>{
    console.log(req.body);
    res.status(200).send({success:true});
    //res.status(400).send({error:"only for testing"});
})

module.exports = router;