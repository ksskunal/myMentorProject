import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../../ContextApi";



function Adminlogin() {  
    const {setAdminStatus} = useContext(ContextApi)
    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        const record = { username, password }
        fetch('/admin/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record)
        }).then((res) => { return res.json() })
            .then((data) => {
                if (data.username === 'admin') {
                  
                    window.localStorage.setItem('adminStatus',3)
                    setAdminStatus(window.localStorage.getItem('adminStatus'))

                    navigate('/admindashboard')
                    // console.log('done')
                }
            })

    }

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className=" col-md-8 offset-md-2 mt-5">
                        
                        <h2 className="text-center">ADMIN LOGIN</h2>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <label  className="form-label" >Username</label>
                            <input value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control" type="text"  />
                            <label  className="form-label">Password</label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" type="password"  />
                            <button type="submit" className="btn btn-primary mt-2 form-control">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adminlogin;