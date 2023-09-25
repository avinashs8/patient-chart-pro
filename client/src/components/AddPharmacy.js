import React, { useContext, useState } from 'react'
import { UserContext } from '../context/User'
import { useNavigate } from 'react-router-dom'

function AddPharmacy() {

    const { pharmacies, setPharmacies } = useContext(UserContext)
    const [ formData, setFormData ] = useState({
        name: '',
        address: '',
        phone_number: ''
    })
    const navigate = useNavigate()

    const handleChange = e =>{
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/addpharmacy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors){
                const updatedPharmacies = [...pharmacies, data]
                setPharmacies(updatedPharmacies)
                navigate('/allpatients')
            }
        })
    }
  return (
    <div>
        <form className="row g-3 d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Pharmacy Name 
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={formData.name}
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
            placeholder='Address'
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
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
    
        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Add Pharmacy
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPharmacy