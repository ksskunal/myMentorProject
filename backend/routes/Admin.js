const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')


router.get('/',(req,res)=>{
 res.send('welcome')
})

router.post('/login',async(req,res)=>{
    const {username,password} = req.body
    console.log(req.body)
    try {
        const adminRecord = await Admin.findOne({username:username})
        if(adminRecord !== null){
            if(adminRecord.password == password){
                res.status(200).json(adminRecord);
            }else{
              res.json('credentials are not correct')
            }
          }else{
            res.json('credentials are not correct')
          }
        
    } catch (e) {
        res.status(500).json({e:e.message})
    }
   })


module.exports = router;

router.get('/test',async(req,res)=>{
    const username = 'admin'
    const password = '123'
    const adminrecord = new Admin({username:username,password:password})
   await adminrecord.save()
   res.send('inserted')
})