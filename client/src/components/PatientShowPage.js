import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/User'
import EditPatientInfo from './EditPatientInfo'

function PatientShowPage({ patients, setPatients }) {

    const { id } = useParams()
    const { user } = useContext(UserContext)
    const [toggleForm, setToggleForm] = useState(false)
    const patient = patients.find(p => p.id === parseInt(id) )


    if(!user || !patients || !patient){
        return(
            <h1>Loading...</h1>
        )
    }

    
    

  return (
    <div>
        <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" >Patient Profile</a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={`/patients/${patient.id}/prescriptions`}>Medications</Link>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">{patient.name}</h5>
        <p class="card-text">
            Date of Birth:  {patient.date_of_birth}
            <br></br>
            Address: {patient.address}
            <br></br>
            Email: {patient.email}
            <br></br>
            Phone Number: {patient.phone_number}

        </p>
        <button class="btn btn-primary" onClick={() => setToggleForm(!toggleForm)}>Update Info</button>
        {toggleForm ? <EditPatientInfo patients={patients} patient={patient} setPatients={setPatients} toggleForm={toggleForm} setToggleForm={setToggleForm}/> : null}
      </div>
    </div>
    
    </div>
  )
}

export default PatientShowPage