import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function PrescriptionList({ prescription }) {
  const { id } = useParams()

  return (
    <div>
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          <div className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <h5 className="fw-bold">
                {prescription.medication} {prescription.dose}
              </h5>
              <p className="mb-0">{prescription.instructions}</p>
            </div>
            <Link to={`/patients/${id}/prescriptions/${prescription.id}`}>
              <button className="btn btn-primary rounded-pill">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrescriptionList
