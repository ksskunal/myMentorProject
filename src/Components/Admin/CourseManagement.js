import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Left from "./Left";

function Coursemanagement() {
    let navigate = useNavigate()
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('/course/show')
        .then((res)=>{return res.json()})
        .then((data)=>{
            setCourses(data)
        })
    },[])
    function handleAddCourse() {
        navigate('/addcourse')
    }
    function handleDelete(id) {
        fetch(`/course/delete/${id}`,{
            method: 'DELETE'
        })

        setCourses(courses.filter((courses)=>courses._id !== id))
    }
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-3 my-5">
                    <Left/>
                </div>
                <div className="col-md-9 ">
                    <h2 className="my-5 text-center">Manage Courses</h2>
                    <div className="m-3">
                        <button onClick={handleAddCourse} className="btn btn-primary">Add course</button>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                       {courses.map((result)=>(
                           <tr key={result._id}>
                         <td>{result.name}</td>
                         <td>{result.desc}</td>
                         <td>{result.duration}</td>
                         <td>{result.fees}</td>
                         <td><button className="btn btn-danger" onClick={()=>{handleDelete(result._id)}}>Delete</button ><Link to={`/updatecourse/${result._id}`} ><button className=" mx-1 btn btn-warning" >Update</button></Link></td>
                     </tr>
                       ))}
                       </tbody>

                        

                    </table>
                </div>
            </div>
        </div>
        </>
     );
}

export default Coursemanagement;