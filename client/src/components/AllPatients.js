import React, { useState } from 'react'
import AddNewPatient from './AddNewPatient'
import PatientCard from './PatientCard'

function AllPatients({ patients, setPatients }) {

  const [toggleForm, setToggleForm] = useState(false)

  const patientsList = patients.map(patient => {
      return(
        <PatientCard key={patient.id} patient={patient}/>
      )
  })


    if(patients.length < 1){
        return(
          <div>
            <h1>Currently There Are No Patients</h1>
            <h3>Click Here to Add a New Patient:</h3>
            <button onClick={() => setToggleForm(!toggleForm)}>Add Patient</button>
            {toggleForm ? <AddNewPatient patients={patients} setPatients={setPatients}/> : null}
          </div>
        )
    }
  return (
    <div>
      {patientsList}
    </div>
  )
}

export default AllPatients