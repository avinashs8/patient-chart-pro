import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/User'

function PatientShowPage({ patients }) {

    const { id } = useParams()
    const { user } = useContext(UserContext)
    const patient = patients.find(p => p.id === parseInt(id) )

    if(!user){
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
            <a class="nav-link active" aria-current="true" href="#">Patient Profile</a>
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
        <button class="btn btn-primary">Update Info</button>
      </div>
    </div>
    </div>
  )
}

export default PatientShowPage