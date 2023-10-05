import React, { useContext, useState } from 'react'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'

function AddPharmacy() {
  const { pharmacies, setPharmacies } = useContext(UserContext)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_number: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [validationErrors, setValidationErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/addpharmacy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.errors) {
          const updatedPharmacies = [...pharmacies, data]
          setPharmacies(updatedPharmacies)
          navigate('/patients')
        } else{
          const errorLis = data.errors.map((e, index) => {
            return <li key={index}>{e}</li>
          })
          setValidationErrors(errorLis)
        }
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Add Pharmacy</h2>
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Pharmacy Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  !formData.name ? 'is-invalid' : ''
                }`}
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formData.name === '' && (
                <div className="invalid-feedback">Please enter a name.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className={`form-control ${
                  !formData.address ? 'is-invalid' : ''
                }`}
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {formData.address === '' && (
                <div className="invalid-feedback">Please enter an address.</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="inputPhoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className={`form-control ${
                  !formData.phone_number ? 'is-invalid' : ''
                }`}
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
              {formData.phone_number === '' && (
                <div className="invalid-feedback">
                  Please enter a phone number.
                </div>
              )}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Pharmacy
              </button>
            </div>
            <ul>{validationErrors}</ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPharmacy
