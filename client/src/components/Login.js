import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorList, setErrorList] = useState([])
  const { login } = useContext(UserContext)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorList([])

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          login(data)
          navigate('/')
        } else {
          setErrorList([data.error]) 
        }
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Log In</h2>
          <form className="row g-3 needs-validation was-validated" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="inputEmailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className={`form-control ${errorList.length ? 'is-invalid' : ''}`}
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <div className="invalid-feedback">{errorList.join(', ')}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${errorList.length ? 'is-invalid' : ''}`}
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="invalid-feedback">{errorList.join(', ')}</div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
