import { useEffect, useState } from 'react'
import AnotherComponent from './AnotherComponent'

const UseEffectComponent = () => {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [showAnotherComponent, setShowAnotherComponent] = useState(true)

  // First use case exmaple:
  // useEffect(() => {
  //   // This code runs when the component mounts and after every render
  //   // This is also run everytime that a state variable or prop changes
  //   console.log('Component mounted or updated')
  // })

  // Second use case exmaple:
  // useEffect(() => {
  //   // This code runs only once when the component mounts
  //   console.log('Component mounted')
  // }, []) // dependency array

  // Third use case exmaple:
  // useEffect(() => {
  //   // This code runs every time the count, firstName, or lastName changes
  //   console.log('Count changed:', count)
  //   console.log('First Name changed:', firstName)
  //   console.log('Last Name changed:', lastName)
  // }, [count, firstName]) // dependency array for count

  


  return (
    <>
      <h2>Use Effect Component</h2>
      <p> First Name: {firstName}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 5)}>
        Increment
      </button>
      <label>
        First Name:
      </label>
      <input 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
      />
      <label>
        Last Name:
      </label>
      <input 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      />

      <button onClick={() => setShowAnotherComponent(!showAnotherComponent)}>
        Toggle Another Component
      </button>

      {
        showAnotherComponent && <AnotherComponent />
      }
    </>
  )
}

export default UseEffectComponent