const express = require('express')
const router = express.Router()
const Course = require('../models/courses')

// Get all course
router.get('/show',async(req,res)=>{
        try {
        const courseRecord = await Course.find()
        res.status(200).json(courseRecord)
        
    } catch (e) {
        res.status(500).json({e:e.message})
    }


})
//  ADD course
router.post('/addcourse',async(req,res)=>{
   const {name,desc,duration,fees} = req.body
    try {

        const courseRecord = new Course({name:name,desc:desc,duration:duration,fees:fees})
        await courseRecord.save()
        console.log(courseRecord)
        
        
    } catch (e) {
        res.status(500).json({e:e.message})
    }
   })

// Get single course record

router.get('/fetchone/:id',async(req,res)=>{
    try {
        const id = req.params.id
        
    const courseRecord = await Course.findById(id)
    res.status(200).json(courseRecord)
    
} catch (e) {
    res.status(500).json({e:e.message})
}


})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id
     await Course.findByIdAndDelete(id)
    res.status(200).json({message: 'deleted'})
    
} catch (e) {
    res.status(500).json({e:e.message})
}


})

router.post('/update/:id',async(req,res)=>{
    try {
    const { name,desc,fees,duration }   = req.body; 
    const id = req.params.id ;
    await Course.findByIdAndUpdate(id, {name : name , desc: desc, fees: fees,duration:duration})
    res.status(200).json({message : 'course  updated'})
} catch (e) {
    res.status(500).json({e:e.message})
}


})


module.exports = router;

router.get('/test',async(req,res)=>{
    const name = 'MERN Stack '
    const desc = 'A FUll stack development course'
    const duration = '6 months'
    const fees = 20000
    const adminrecord = new Course({name:name,desc:desc,duration:duration,fees:fees})
   await adminrecord.save()
   res.send('inserted')
})