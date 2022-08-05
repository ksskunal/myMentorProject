const express = require('express')
const router = express.Router()
const Mentor = require('../models/mentor')


module.exports = router;

router.get('/test',async(req,res)=>{
    const name = 'mentor 1'
    const username = 'mentor123'
    const password = '123'
    const experince = '1 year'
    const mentorrecord = new Mentor({username:username,password:password,name:name,experince:experince})
   await mentorrecord.save()
   res.send('inserted')
})