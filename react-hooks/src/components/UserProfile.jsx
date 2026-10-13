import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserProfile = () => {

  console.log('This is the User Profile Component')

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <div className="user-profile-component">
        <h2 className="use-context-heading">User Profile</h2>
        <p>Username: {user}</p>
        <label htmlFor="user">Username: </label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
      </div>
    </>
  )
}

export default UserProfile