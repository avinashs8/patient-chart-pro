import React from 'react'

function PrescriptionShowPage({ prescription }) {
  return (
    <div>
        <ol class="list-group list-group-numbered">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Subheading</div>
          Content for list item
        </div>
        <button class="badge bg-primary rounded-pill">View More</button>
      </li>
    </ol>
    </div>
  )
}

export default PrescriptionShowPage