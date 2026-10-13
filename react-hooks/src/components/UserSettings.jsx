import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserSettings = () => {
  console.log('This is the User Settings Component')

  // aliasing the context values to more descriptive names
  // const { preference: currentPreference, setPreference: setCurrentPreference } = useContext(UserContext)
  const { preference, setPreference } = useContext(UserContext)

  return (
    <>
      <div className="user-settings-component">
        <h2 className="use-context-heading">User Settings</h2>
        <p>Preference: {preference}</p>
        <button onClick={() => setPreference(preference === 'dark' ? 'light' : 'dark')}>
          Toggle Preference
        </button>
      </div>
    </>
  )
}

export default UserSettings