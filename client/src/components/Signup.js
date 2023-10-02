import React, { useState, useContext } from 'react'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    specialization: '',
    address: '',
    phone_number: '',
  })
  const [validationErrors, setValidationErrors] = useState([])
  const { signup } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidationErrors({})

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.errors) {
          signup(data)
          navigate('/')
        } else {
          setValidationErrors(data.errors)
        }
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Sign Up</h2>
          <form
            className="row g-3 needs-validation was-validated"
            onSubmit={handleSubmit}
          >
            <div className="col-md-6 mb-3">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.name ? 'is-invalid' : ''
                }`}
                name="name"
                placeholder="First and Last Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputEmailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className={`form-control ${
                  validationErrors.email ? 'is-invalid' : ''
                }`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  validationErrors.password ? 'is-invalid' : ''
                }`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputPasswordConfirmation" className="form-label">
                Password Confirmation
              </label>
              <input
                type="password"
                className={`form-control ${
                  validationErrors.password_confirmation ? 'is-invalid' : ''
                }`}
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputSpecialization" className="form-label">
                Specialization
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.specialization ? 'is-invalid' : ''
                }`}
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.address ? 'is-invalid' : ''
                }`}
                name="address"
                placeholder="1234 Main St"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="inputPhoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.phone_number ? 'is-invalid' : ''
                }`}
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <ul>{validationErrors}</ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
