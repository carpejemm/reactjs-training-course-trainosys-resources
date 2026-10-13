import { UserProvider } from '../contexts/UserContext'
import UserProfile from './UserProfile'
import UserDetails from './UserDetails'
import UserSettings from './UserSettings'

const UserParentComponent = () => {
  console.log('This is the User Parent Component')

  return (
    <>
      <div className="user-parent-component">
        <h2 className="use-context-heading">User Parent Component</h2>
        {/* <UserProfile
          user={user}
          firstName={firstName}
          lastName={lastName}
          preference={preference}
        /> */}
        {/* <UserProfile /> */}

        <UserProvider>
          <UserProfile />
          <UserDetails />
          <UserSettings />
        </UserProvider>
      </div>
    </>
  )
}

export default UserParentComponent