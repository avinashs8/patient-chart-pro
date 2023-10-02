import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const { loggedIn, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout')
    .then( () => {
      logout()
      navigate('/')
  })
  }


  
  if (loggedIn){
    return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" exact>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/patients" exact>All Patients</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/mypatients" exact>My Patients</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" onClick={logoutUser}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" exact>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

