import React from 'react'

function AllPatients({ patients }) {

    if(patients.length < 1){
        return(
            <h1>Currently There are no Patients</h1>
        )
    }
  return (
    <div>AllPatients</div>
  )
}

export default AllPatients