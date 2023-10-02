import React, { useContext, useState } from 'react'
import AddNewPatient from './AddNewPatient'
import PatientCard from './PatientCard'
import { UserContext } from '../context/User'

function MyPatients({ patients, setPatients }) {
  const { user } = useContext(UserContext)
  const [toggleForm, setToggleForm] = useState(false)
  const [search, setSearch] = useState([])

  const searchedPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search)
  )

  if (!user) {
    return <h1>Loading...</h1>
  }

  const patientsOfSpecificUser = searchedPatients.filter((patient) =>
    patient.prescriptions.some((prescription) => prescription.user_id === user.id)
  )

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const patientsList = patientsOfSpecificUser.map((patient) => (
    <PatientCard key={patient.id} patient={patient} />
  ))

  if (user.patients.length < 1) {
    return (
      <div className="container text-center mt-5">
      <div className="jumbotron">
        <h1 className="display-4">No Patients Found</h1>
        <p className="lead">It looks like you have no patients.</p>
        <hr className="my-4" />
      </div>
    </div>
    )
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Search By Name:</h1>
      <input
        className="form-control mb-4"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <div className="card text-center">
        <div className="card-body">
          <h3 className="mb-4">My Patients:</h3>
          <div className="d-flex flex-column align-items-center">
            {patientsList}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary mt-4 btn-lg"
          onClick={() => setToggleForm(!toggleForm)}
        >
          Add Patient
        </button>
      </div>
      {toggleForm ? (
        <AddNewPatient patients={patients} setPatients={setPatients} />
      ) : null}
    </div>
  )
}

export default MyPatients
