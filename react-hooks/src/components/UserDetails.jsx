import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserDetails = () => {
  console.log('This is the User Details Component')

  const { firstName, lastName } = useContext(UserContext)

  return (
    <>
      <div className="user-details-component">
        <h2 className="use-context-heading">User Details</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
    </>
  )
}

export default UserDetails