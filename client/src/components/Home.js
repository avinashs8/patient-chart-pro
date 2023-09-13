import React, { useContext } from 'react'
import { UserContext } from '../context/User'

function Home() {
  const { user, loggedIn } = useContext(UserContext)

  if(!user || user.error){
    return (<h1 className='centered'>Please Login or Signup to Use App!</h1>)
}


  return (
    <div>
      <h1>Welcome Dr. {user.name.split(' ')[1]}!</h1>
    </div>
  )
}

export default Home