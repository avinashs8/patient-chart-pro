import React, { useState } from 'react'
import AddNewPatient from './AddNewPatient'
import PatientCard from './PatientCard'


function AllPatients({ patients, setPatients }) {

  const [toggleForm, setToggleForm] = useState(false)
  const [search, setSearch] = useState([])


  const searchedPatients = patients.filter(patient => patient.name.toLowerCase().includes(search))

  const patientsList = searchedPatients.map(patient => {
      return(
        <PatientCard key={patient.id} patient={patient}/>
      )
  })

  const handleChange = e => {
    setSearch(e.target.value)
  }


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
      <h1>Search By Name:</h1>
      <input placeholder='Search' value={search} onChange={handleChange}></input>
      <h3>All Patients:</h3>
      {patientsList}
      <button onClick={() => setToggleForm(!toggleForm)}>Add Patient</button>
      {toggleForm ? <AddNewPatient patients={patients} setPatients={setPatients}/> : null}
    </div>
  )
}

export default AllPatients