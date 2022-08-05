const express = require('express');
const router = express.Router();
const User = require('../models/user');



module.exports = router;

router.get('/test',async(req,res)=>{
    const name = 'user1'
    const username = 'user123'
    const password = '123'
    const userrecord = new User({username:username,password:password,name:name})
   await userrecord.save()
   res.send('inserted')
})