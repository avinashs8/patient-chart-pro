import React from 'react'
import { useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {

    const [ user, setUser ] = useState(null)
    const [ loggedIn, setloggedIn ] = useState(false)
    const [ pharmacies, setPharmacies] = useState([])

    useEffect(() => {
      fetch('/me')
      .then(resp => resp.json()) 
      .then(data => {
        if(data.name){
          setloggedIn(true)
          setUser(data)
        }
      })
    }, [])

    useEffect(() => {
      fetch('/pharmacies')
      .then(resp => resp.json())
      .then(data => {
        setPharmacies(data)
      })
    }, [])

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
      setloggedIn(false)
    }

  return (
    <UserContext.Provider value={{ user, setUser, signup, login, logout, loggedIn, pharmacies, setPharmacies }}>{ children }</UserContext.Provider>
  )
}

export { UserContext, UserProvider }