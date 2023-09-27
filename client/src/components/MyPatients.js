import React, { useContext, useState } from 'react'
import AddNewPatient from './AddNewPatient'
import PatientCard from './PatientCard'
import { UserContext } from '../context/User'


function MyPatients({ patients, setPatients }) {

  const { user } = useContext(UserContext)
  const [toggleForm, setToggleForm] = useState(false)
  const [search, setSearch] = useState([])


  const searchedPatients = patients.filter(patient => patient.name.toLowerCase().includes(search))

  if(!user){
    return <h1>Loading...</h1>
  }


  const patientsOfSpecificUser = searchedPatients.filter(patient => patient.prescriptions.some(prescription => prescription.user_id === user.id))

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const patientsList = patientsOfSpecificUser.map(patient => {
      return(
        <PatientCard key={patient.id} patient={patient}/>
      )
  })


    if(user.patients.length < 1){
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
      <h3>My Patients:</h3>
      {patientsList}
      <button onClick={() => setToggleForm(!toggleForm)}>Add Patient</button>
      {toggleForm ? <AddNewPatient patients={patients} setPatients={setPatients}/> : null}
    </div>
  )
}

export default MyPatients