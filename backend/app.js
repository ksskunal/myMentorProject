const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dbUri = 'mongodb://127.0.0.1:27017/myMentorProject'
const adminRouter = require('./routes/Admin')
const CourseApi = require('./routes/Courses')
const mentorApi = require('./routes/Mentor')
const userApi = require('./routes/User')

mongoose.connect(dbUri,()=>{
    console.log('db is connected')
})
app.use(express.json())
app.use('/admin',adminRouter)
app.use('/course',CourseApi)
app.use('/mentor',mentorApi)
app.use('/user',userApi)



app.listen(5000,()=>{
 console.log('Server is running')
})