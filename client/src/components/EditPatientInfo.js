import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function EditPatientInfo({ patients, setPatients, patient, setToggleForm, toggleForm }) {
  const [formData, setFormData] = useState({
    name: patient.name,
    date_of_birth: patient.date_of_birth,
    email: patient.email,
    address: patient.address,
    phone_number: patient.phone_number,
  })

  const { id } = useParams()

  const [validationErrors, setValidationErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/patients/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          const errorLis = data.errors.map((e, index) => {
            return <li key={index}>{e}</li>
          })
          setValidationErrors(errorLis)
        } else {
          const updatedPatients = patients.map((p) => {
            if (p.id === parseInt(id)) {
              return data
            } else {
              return p
            }
          })
          setPatients(updatedPatients)
          setToggleForm(!toggleForm)
        }
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Edit Patient Info</h2>
          <form className="row g-3 needs-validation was-validated" onSubmit={handleSubmit}>
            <div className="mb-3">
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
              <div className="invalid-feedback">{validationErrors.address}</div>
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
                Update Patient Info
              </button>
            </div>
            <ul>{validationErrors}</ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPatientInfo
