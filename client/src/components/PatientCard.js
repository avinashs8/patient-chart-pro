import React from 'react';
import { NavLink } from 'react-router-dom';

function PatientCard({ patient }) {
  return (
    <div>
      <div className="card text-center mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">Date of Birth: {patient.date_of_birth}</p>
          <NavLink to={`/allpatients/${patient.id}`}>
            <button className="btn btn-primary">Full Profile</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
