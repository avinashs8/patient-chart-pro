import React from 'react';

function PatientCard({ patient }) {
  return (
    <div>
      <div className="card text-center mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">Date of Birth: {patient.date_of_birth}</p>
          <button className="btn btn-primary">Full Profile</button>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
