import React from 'react'
import { useState } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [ user, setUser ] = useState(null)
    const [ loggedIn, setloggedIn ] = useState(false)

    const signup = (user) =>{
      setUser(user)
      setloggedIn(true)
    }

    const login = (user) => {
      setUser(user)
      setloggedIn(true)
    }

    const logout = () => {
      setUser(null)
    }

  return (
    <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>
  )
}

export { UserContext, UserProvider }