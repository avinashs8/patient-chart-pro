import React from 'react'

function PrescriptionList({ prescription }) {
  return (
    <div>
    <ol class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{prescription.medication} {prescription.dose}</div>
          {prescription.instructions}
        </div>
        <button class="badge bg-primary rounded-pill">View More</button>
      </li>
      </ol>
    </div>
  )
}

export default PrescriptionList