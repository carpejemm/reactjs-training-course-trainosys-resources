// using useContext hook in React
// This is called Context API 
import { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('johndoe')
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [preference, setPreference] = useState('dark')

  const sampleFunction = () => {
    console.log('This is a sample function')
  }

  const menuItems = ['Home', 'Profile', 'Settings']

  const personObj = {
    firstName,
    lastName,
    preference,
  }

  const valueObj = {
    user,
    setUser,
    firstName,
    setFirstName,
    lastName, 
    setLastName,
    preference,
    setPreference,
    sampleFunction,
    menuItems,
    personObj
  }


  return (
    <UserContext.Provider value={valueObj}>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }