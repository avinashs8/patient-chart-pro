import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/User'

function PrescriptionShowPage({ patients, setPatients }) {

    const { patientId, id } = useParams()
    const { user, pharmacies } = useContext(UserContext)

    const patient = patients.find(p => p.id === parseInt(patientId))

    if (!patient || !user){
        return <h1>Loading...</h1>
    }
    
    
    const prescription = patient.prescriptions.find(p => p.id === parseInt(id))
    
    const pharmacy = pharmacies.find(p => p.id === prescription.pharmacy_id)

    if (!pharmacy){
        return <h1>Loading...</h1>
    }
    
    

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card border-0 rounded-lg shadow-lg" style={{ width: '40rem' }}>
        <div className="card-body">
          <h2 className="card-title mb-4">{prescription.medication} {prescription.dose}</h2>
          <p className="card-text">{prescription.instructions}</p>
          <p className="mb-1"><strong>Quantity:</strong> {prescription.quantity}</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <small className="text-muted"><strong>Doctor:</strong> {user.name}</small>
            </div>
            <div>
              <small className="text-muted"><strong>Pharmacy:</strong> {pharmacy.name}</small>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="btn btn-primary btn-block">Learn More</a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default PrescriptionShowPage