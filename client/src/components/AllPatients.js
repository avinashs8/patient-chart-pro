import React, { useState } from 'react';
import AddNewPatient from './AddNewPatient';
import PatientCard from './PatientCard';

function AllPatients({ patients, setPatients }) {
  const [toggleForm, setToggleForm] = useState(false);
  const [search, setSearch] = useState('');

  const searchedPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const patientsList = searchedPatients.map((patient) => (
    <PatientCard key={patient.id} patient={patient} />
  ));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (patients.length < 1) {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Currently There Are No Patients</h1>
        <h3>Click Here to Add a New Patient:</h3>
        <button
          className="btn btn-primary"
          onClick={() => setToggleForm(!toggleForm)}
        >
          Add Patient
        </button>
        {toggleForm ? <AddNewPatient patients={patients} setPatients={setPatients} /> : null}
      </div>
    );
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
          <h3 className="mb-4">All Patients:</h3>
          <div className="d-flex flex-column align-items-center">
            {patientsList}
          </div>
        </div>
      </div>
      <div className='text-center'>
      <button
        className="btn btn-primary mt-4 btn-lg"
        onClick={() => setToggleForm(!toggleForm)}
      >
        Add Patient
      </button>
      </div>
      {toggleForm ? <AddNewPatient patients={patients} setPatients={setPatients} /> : null}
    </div>
  );
}

export default AllPatients;
