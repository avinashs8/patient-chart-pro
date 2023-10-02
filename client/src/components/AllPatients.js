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
      <div className="container text-center mt-5">
        <div className="jumbotron">
          <h1 className="display-4">No Patients Found</h1>
          <p className="lead">It looks like there are currently no patients in the system.</p>
          <hr className="my-4" />
          <p className="lead">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setToggleForm(!toggleForm)}
            >
              Add a New Patient
            </button>
          </p>
        </div>
        {toggleForm && (
          <AddNewPatient
            patients={patients}
            setPatients={setPatients}
            setToggleForm={setToggleForm}
            toggleForm={toggleForm}
          />
        )}
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
      <div className="text-center">
        <button
          className="btn btn-primary mt-4 btn-lg"
          onClick={() => setToggleForm(!toggleForm)}
        >
          Add Patient
        </button>
      </div>
      {toggleForm && (
        <AddNewPatient
          patients={patients}
          setPatients={setPatients}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
        />
      )}
    </div>
  );
}

export default AllPatients;

