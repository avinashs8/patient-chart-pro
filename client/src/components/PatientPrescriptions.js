import React from 'react';
import PrescriptionList from './PrescriptionList';
import AddPrescriptionForm from './AddPrescriptionForm';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function PatientPrescriptions({ patients, setPatients }) {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === parseInt(id));
  const [toggleForm, setToggleForm] = useState(false);

  if (!patient) {
    return <h1>Loading...</h1>;
  }

  const prescriptions = patient.prescriptions ? (
    patient.prescriptions.map((prescription) => (
      <PrescriptionList key={prescription.id} prescription={prescription} />
    ))
  ) : (
    <div className="alert alert-warning">No Active Prescriptions</div>
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{patient.name}'s Prescriptions:</h1>
      {prescriptions}
      <button
        className="btn btn-primary mt-4"
        onClick={() => setToggleForm(!toggleForm)}
      >
        Add New Prescription
      </button>
      {toggleForm ? (
        <AddPrescriptionForm
          patients={patients}
          setPatients={setPatients}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
        />
      ) : null}
    </div>
  );
}

export default PatientPrescriptions;

