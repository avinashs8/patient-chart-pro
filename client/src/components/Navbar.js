import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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
