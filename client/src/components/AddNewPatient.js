import React, { useState } from 'react'


function AddNewPatient() {


    const [formData, setFormData] = useState({
        name: '',
        date_of_birth: '',
        email: '',
        address: '',
        phone_number: '',
    })

    

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value 
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
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
          <label htmlFor="inputDateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            name="Date of Birth"
            placeholder='yyyy-mm-dd'
            value={formData.date_of_birth}
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
            Add Patient
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewPatient