import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User';
import EditPrescriptionForm from './EditPrescriptionForm';

function PrescriptionShowPage({ patients, setPatients }) {
  const { patientId, id } = useParams();
  const { user, pharmacies } = useContext(UserContext);
  const [toggleForm, setToggleForm] = useState(false);
  const navigate = useNavigate();

  const patient = patients.find((p) => p.id === parseInt(patientId));

  if (!patient || !user) {
    return <h1>Loading...</h1>;
  }

  const prescription = patient.prescriptions.find((p) => p.id === parseInt(id));


  if (!prescription) {
    return <h1>Loading...</h1>;
  }

  const pharmacy = pharmacies.find((p) => p.id === prescription.pharmacy_id);

  if (!pharmacy) {
    return <h1>Loading...</h1>;
  }

  const deletePrescription = () => {
    fetch(`/prescriptions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const prescriptionsAfterDelete = patients.map((patient) => {
          if (patient.id === parseInt(patientId)) {
            const updatedPatientPrescriptions = patient.prescriptions.filter(
              (p) => p.id !== parseInt(id)
            );
            return { ...patient, prescriptions: updatedPatientPrescriptions };
          } else {
            return patient;
          }
        });
        setPatients(prescriptionsAfterDelete);
        navigate(`/patients/${patientId}/prescriptions`);
      })
      .then(() => {
        fetch('/delete_prescription_email', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: patient.email,
            name: patient.name,
            user: user.name,
            prescription: prescription.medication
        })
        })
      })
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card border-0 rounded-lg shadow-lg" style={{ width: '40rem' }}>
          <div className="card-body">
            <h2 className="card-title mb-4">{prescription.medication} {prescription.dose}</h2>
            <p className="card-text">{prescription.instructions}</p>
            <p className="mb-1"><strong>Quantity:</strong> {prescription.quantity}</p>
            <hr />
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <small className="text-muted"><strong>Doctor:</strong> {user.name}</small>
              </div>
              <div>
                <small className="text-muted"><strong>Pharmacy:</strong> {pharmacy.name}</small>
              </div>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary btn-block" onClick={() => setToggleForm(!toggleForm)}>Edit Prescription</button>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary btn-block" onClick={deletePrescription}>Delete Prescription</button>
            </div>
          </div>
        </div>
      </div>
      {toggleForm ? <EditPrescriptionForm toggleForm={toggleForm} setToggleForm={setToggleForm} patients={patients} setPatients={setPatients} prescription={prescription} /> : null}
    </div>
  );
}

export default PrescriptionShowPage;
