import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Addcourse() {
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [duration, setDuration] = useState('')
    const [fees, setFees] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        const record = { name,desc,duration,fees}
        fetch('/course/addcourse', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record)
        }).then((res) => { return res.json() })
            .then((data) => {
            })
            navigate('/coursemanage')
        }
    return ( 
        <>
        <div className="container">
                <div className="row ">
                    <div className=" col-md-8 offset-md-2 mt-5">
                        <h2 className="text-center">Add course</h2>
                        <form action="" method="post" onSubmit={handleSubmit} >
                            <label  className="form-label" >Name</label>
                            <input  className="form-control" type="text" value={name} onChange={(e) => { setName(e.target.value) }}  />
                            <label  className="form-label">Desc</label>
                            <input className="form-control" type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }}  />
                            <label  className="form-label">Duration</label>
                            <input className="form-control" type="text" value={duration} onChange={(e) => { setDuration(e.target.value) }}  />
                            <label  className="form-label">Fees</label>
                            <input className="form-control" type="text" value={fees} onChange={(e) => { setFees(e.target.value) }}  />
                            <button type="submit" className="btn btn-primary mt-2 form-control">Add Course</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Addcourse;