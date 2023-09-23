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
    <div>
        <div className="card text-center mb-3" style={{ width: '24rem' }}>
            <div className="card-body">
                <h5 className="card-title">{prescription.medication} {prescription.dose}</h5>
                <p className="card-text">{prescription.instructions}</p>
                <h7>Doctor: {user.name}</h7>
                <h8>Pharmacy: {pharmacy.name}</h8>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default PrescriptionShowPage