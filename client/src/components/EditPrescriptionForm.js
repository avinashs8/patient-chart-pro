import React, { useContext, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/User'

function EditPrescriptionForm({ toggleForm, setToggleForm, patients, setPatients, prescription}) {
  
    const { patientId, id } = useParams()
    const { user, pharmacies } = useContext(UserContext)

    

    const [ formData, setFormData ] = useState({
        medication: prescription.medication,
        dose: prescription.dose,
        instructions: prescription.instructions,
        quantity: prescription.quantity,
        patient_id: patientId,
        user_id: user.id,
        pharmacy_id: prescription.pharmacy_id
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

    const patient = patients.find(patient => patient.id === parseInt(formData.patient_id))

    

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`/prescription/${id}`, {
            method: 'PATCH', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors){
                const updatedPatients = patients.map(patient => {
                    if (patient.id === parseInt(patientId)){
                        const updatedPrescription = patient.prescriptions.map(p => {
                            if(p.id === data.id){
                                return data
                            } else {
                                return p
                            }
                        })
                        return { ...patient, prescriptions: updatedPrescription}
                    } else {
                        return patient
                    }
                })
                setPatients(updatedPatients)
                setToggleForm(!toggleForm)
            }
        })
        .then(() => {
          fetch('/update_prescription_email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: patient.email,
              name: patient.name,
              user: user.name,
              prescription: formData
          })
          })
        })
    }

  return (
    <div>
        <form className="row g-3 d-flex justify-content-center" onSubmit={handleSubmit}>
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
        <Link to='/addpharmacy'>
          <button>Add Pharmacy</button>
        </Link>

        <div className="col-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Update Prescription
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPrescriptionForm