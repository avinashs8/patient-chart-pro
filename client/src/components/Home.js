import React, { useContext } from 'react'
import { UserContext } from '../context/User'

function Home() {
  const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (
      <div className="container text-center mt-5">
        <h1 className="display-4">Please Login or Signup to Use App!</h1>
      </div>
    )
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Welcome Dr. {user.name.split(' ')[1]}!</h1>
      <p className="lead">
        This app provides a user-friendly platform for doctors to manage their patients efficiently. Doctors can seamlessly add new patients to their records, view detailed profiles of each patient, and maintain a comprehensive record of all medications prescribed to their patients. With these features, healthcare professionals can stay organized, monitor patient health more effectively, and ensure accurate medication management for improved patient care.
      </p>
    </div>
  )
}

export default Home

