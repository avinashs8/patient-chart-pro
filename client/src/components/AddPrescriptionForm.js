import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/User'

function AddPrescriptionForm() {

    const { id } = useParams()
    const { user, pharmacies } = useContext(UserContext)
    const [ formData, setFormData ] = useState({
        medication: '',
        dose: '',
        instructions: '',
        quantity: '',
        patient_id: id,
        user_id: user.id,
        pharmacy_id: ''
    })

    const handleChange = e =>{
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const selectPharmacy = pharmacies.map(pharmacy => {
        return(
            <option value={pharmacy.id} key={pharmacy.id}>{pharmacy.name}</option>
        )
    })

    console.log(formData)

  return (
    <div>
        <form className="row g-3 d-flex justify-content-center" onSubmit={null}>
        <div className="col-md-6">
          <label htmlFor="inputMedication" className="form-label">
            Medication Name
          </label>
          <input
            type="text"
            className="form-control"
            name="medication"
            placeholder="Medication Name"
            value={formData.medication}
            onChange={handleChange}
          />
        </div>
        
        <div className="col-12">
          <label htmlFor="inputDose" className="form-label">
            Dose
          </label>
          <input
            type="text"
            className="form-control"
            name="dose"
            placeholder='dose'
            value={formData.dose}
            onChange={handleChange}
          />
        </div>
        
        <div className="col-12">
          <label htmlFor="inputInstructions" className="form-label">
            Instructions
          </label>
          <input
            type="text"
            className="form-control"
            name="instructions"
            placeholder="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputQuantity" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <select class="form-select" aria-label="Default select example" onChange={handleChange} value={formData.pharmacy_id} name='pharmacy_id'>
            <option selected="">Select a Pharmacy</option>
            {selectPharmacy}
            
        </select>

        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Add Prescription
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPrescriptionForm