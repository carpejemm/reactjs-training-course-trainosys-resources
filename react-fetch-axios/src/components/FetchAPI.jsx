import { useEffect, useState } from 'react'

const BASE_URL = "https://jsonplaceholder.typicode.com"

const FetchAPI = () => {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState('')

  useEffect(() => {
    console.log('FetchAPI component mounted')

    const fetchUsers = async () => {
      try {
        // by default, fetch uses the GET method
        const response = await fetch(`${BASE_URL}/users`)
        const data = await response.json()
        setUsers(data)
        console.table(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleAddUser = async () => {
    if (newUser.trim() === '') return

    const newUserObject = {
      name: newUser,
      email: `${newUser.toLowerCase().replace(/\s+/g, '')}@example.com`
    }

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserObject)
      })

      const newUserAdded = await response.json()
      console.log('Added user:', newUserAdded)
      // prevUsers - the previous state of the users array before adding the new user
      // ...prevUsers - shallow copy of our previous users array
      // data - the newly added user object returned from the API
      setUsers(prevUsers => [...prevUsers, newUserAdded])
      setNewUser('')
      
    } catch (error) {
      console.error('Error adding user:', error)
    }
  }




  return (
    <>
      <div className="fetch-api-component">
        <h2>Fetch API Component</h2>
        {/* Add a Form to add new user */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter new user name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="button" onClick={handleAddUser}>Add User</button>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FetchAPI