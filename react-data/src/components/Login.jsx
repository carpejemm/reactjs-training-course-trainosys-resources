import { useState } from 'react'

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  // Conditionals
  // && - OR
  // || - AND
  // ! - NOT
  // ?? - Nullish Coalescing Operator
  // !! - Double Negation (converts a value to its boolean equivalent)

  return (
    <div className="login-container">
      <h2>Login Component</h2>
      {/* This is React Conditionals */}
      <p>{userName && `Hello, ${userName}`}</p>
      <p>{password && `Your password is ${password.length} characters long.`}</p>

      <p>Please enter your username and password to login.</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          // This is Data binding for the username input field
          // Data Binding - is the process of synchronizing the state with the input field value
          value={userName}
          // this is an event to change the input value for the username field
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password"
          // This is Data binding for the password input field
          // Data Binding - is the process of synchronizing the state with the input field value
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
        <br />
        <button type="button">Login</button>
      </form>
    </div>
  )
}

export default Login