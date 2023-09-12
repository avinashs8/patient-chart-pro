import React, { useState, useContext } from 'react';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        specialization: '',
        address: '',
        phone_number: ''
    })
    const [errorList, setErrorList] = useState({})
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
          if (!data.errors) {
            signup(data)
            navigate('/')
          }
        })
    }

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="First and Last Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPasswordConfirmation" className="form-label">
            Password Confirmation
          </label>
          <input
            type="password"
            className="form-control"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputSpecialization" className="form-label">
            Specialization
          </label>
          <input
            type="text"
            className="form-control"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
