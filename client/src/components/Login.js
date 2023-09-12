import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorList, setErrorList] = useState([]);
    const { login } = useContext(UserContext);
    const navigate = useNavigate()

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if(!data.error){ 
        login(data) 
        navigate('/')
      }
      else{
        setErrorList(data.error)
      }
    });
  };

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        
        <div className="col-md-6">
          <label htmlFor="inputEmailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
      <ul>{errorList}</ul>
    </div>
  )
}

export default Login