import React from 'react';
import { NavLink } from 'react-router-dom';

function PatientCard({ patient }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">
            <strong>Date of Birth:</strong> {patient.date_of_birth}
          </p>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <NavLink
            to={`/patients/${patient.id}`}
            className="btn btn-primary btn-block"
          >
            View Full Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
