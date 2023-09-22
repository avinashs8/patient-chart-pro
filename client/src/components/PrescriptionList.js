import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function PrescriptionList({ prescription }) {

  const { id } = useParams()

  

  return (
    <div>
    <ol class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{prescription.medication} {prescription.dose}</div>
          {prescription.instructions}
        </div>
        <Link to={`/patients/${id}/prescriptions/${prescription.id}`}>
          <button class="badge bg-primary rounded-pill">View More</button>
        </Link>
      </li>
      </ol>
    </div>
  )
}

export default PrescriptionList