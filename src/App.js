
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Admindashboard from './Components/Admin/Admindashboard';
import Adminlogin from './Components/Admin/Adminlogin';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Coursemanagement from './Components/Admin/CourseManagement';
import Mentormanagement from './Components/Admin/MentorManagement';
import Usermanagement from './Components/Admin/UserManagement';
import Addcourse from './Components/Courses/AddCourse';
import { ContextApi } from './ContextApi';
import { useState } from 'react';
import UpdateCourse from './Components/Courses/updateCourse';

function App() {
  const [adminStatus, setAdminStatus] = useState(window.localStorage.getItem('adminStatus'))
  const [mentorStatus, setMentorStatus] = useState('')
  return (
    <>
    <Router>
    <ContextApi.Provider value={{adminStatus, setAdminStatus,mentorStatus, setMentorStatus}}>

   
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    {/* Admin Routes */}
    <Route path='/admin' element={<Adminlogin/>}></Route>
    <Route path='/admindashboard' element={<Admindashboard/>}></Route>
    <Route path='/coursemanage' element={<Coursemanagement/>}></Route>
    <Route path='/mentormanage' element={<Mentormanagement/>}></Route>
    <Route path='/usermanage' element={<Usermanagement/>}></Route>
    <Route path='/addcourse' element={<Addcourse/>}></Route>
    <Route path='/updatecourse/:id' element={<UpdateCourse/>}></Route>
    


    </Routes>

    
    <Footer/>
    </ContextApi.Provider>
    </Router>
    
    </>
  );
}

export default App;
