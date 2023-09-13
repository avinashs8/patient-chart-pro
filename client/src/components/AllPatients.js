import React, { useState } from 'react'
import AddNewPatient from './AddNewPatient'

function AllPatients({ patients }) {

  const [toggleForm, setToggleForm] = useState(false)

    if(patients.length < 1){
        return(
          <div>
            <h1>Currently There Are No Patients</h1>
            <h3>Click Here to Add a New Patient:</h3>
            <button onClick={() => setToggleForm(!toggleForm)}>Add Patient</button>
            {toggleForm ? <AddNewPatient /> : null}
          </div>
        )
    }
  return (
    <div>

    </div>
  )
}

export default AllPatients