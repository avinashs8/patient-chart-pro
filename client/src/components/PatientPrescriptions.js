import React from 'react'
import { useParams } from 'react-router-dom'

function PatientPrescriptions({ patients }) {

    const { id } = useParams()

    const patient = patients.find(p => p.id === parseInt(id))

    if (!patient){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>{patient.name}'s Prescriptions</h1>
    </div>
  )
}

export default PatientPrescriptions