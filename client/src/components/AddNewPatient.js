import React, { useState } from 'react'

function AddNewPatient({ patients, setPatients }) {
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    email: '',
    address: '',
    phone_number: '',
  })

  const [validationErrors, setValidationErrors] = useState({})

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

    fetch('/addpatient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setValidationErrors(data.errors)
          console.log(data)
          console.log(validationErrors)
        } else {
          const newPatients = [...patients, data]
          setPatients(newPatients)
          setFormData({
            name: '',
            date_of_birth: '',
            email: '',
            address: '',
            phone_number: '',
          })
        }
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Add New Patient</h2>
          <form
            className="row g-3 needs-validation was-validated"
            onSubmit={handleSubmit}
            
          >
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors ? 'is-invalid' : ''
                }`}
                name="name"
                placeholder="First and Last Name"
                value={formData.name}
                onChange={handleChange}
                autoFocus
                required
              />
            </div>
            <div className="mb-3">
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
              <div className="invalid-feedback">{validationErrors[1]}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputDateOfBirth" className="form-label">
                Date of Birth
              </label>
              <input
                type="text"
                className={`form-control ${
                  validationErrors.date_of_birth ? 'is-invalid' : ''
                }`}
                name="date_of_birth"
                placeholder="yyyy-mm-dd"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNewPatient
