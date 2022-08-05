import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../ContextApi';

function Header() {
  let navigate = useNavigate()

  const {adminStatus, mentorStatus ,setAdminStatus} = useContext(ContextApi)
  function handleAdminlogout() {

    setAdminStatus(window.localStorage.removeItem('adminStatus'))
    navigate('/')
    
  }
  if(adminStatus === '3'){
    return (<>
          <>
        <nav className="navbar navbar-expand-lg bg-light mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h2 className='mx-5'> myMentor.Com </h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <h4 className='mx-5'>Admin Dashboard</h4>
        </li>
      </ul>
      <div className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <button onClick={handleAdminlogout} className='btn'>Logout</button>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</>
    </>)
  }else if(mentorStatus === 2){
    return (<><h2>Hello mentor</h2></>)
  }else{
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">myMentor.Com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Cources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
      </ul>
      <div className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">User Login</a></li>
            <li><a className="dropdown-item" href="/">Mentor Login</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/admin">Admin Login</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown" >
            <li><a className="dropdown-item" href="/">As User</a></li>
            <li><a className="dropdown-item" href="/">As mentor</a></li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</>);
  }
}

export default Header;