import React from 'react';
import PrescriptionShowPage from './PrescriptionShowPage';
import AddPrescriptionForm from './AddPrescriptionForm';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function PatientPrescriptions({ patients }) {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === parseInt(id))
  const [ toggleForm, setToggleForm ] = useState(false)


  if (!patient) {
    return <h1>Loading...</h1>;
  }

  const prescriptions = patient.prescriptions
    ? patient.prescriptions.map((prescription) => {
        return <PrescriptionShowPage key={prescription.id} prescription={prescription} />
      })
    : <h1>No Active Prescriptions</h1>

  return (
    <div>
      <h1>{patient.name}'s Prescriptions:</h1>
      {prescriptions}
      <button onClick={() => setToggleForm(!toggleForm)}>Add New Prescription</button>
      {toggleForm ? <AddPrescriptionForm /> : null}
    </div>
  );
}

export default PatientPrescriptions;
