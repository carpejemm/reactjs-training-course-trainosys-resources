import { useState } from 'react'

const UseStateComponent = () => {
  const [points, setPoints] = useState(0)
  // points - state variable
  // setPoints - updater function for the points state variable
  // note: by convention set is the prefix for the updater function of a state variable
  // useState - React hook for adding state to functional components
  // 0 - initial value for the points state variable

  // note: the following code demonstrates how you might manage state without using the useState hook and using vanilla JavaScript
  // const points = 0 // initial value for the points state variable without using useState
  // const setPoints = () => {
  //   points = points + 1
  // }


  return (
    <>
      <h2>Use State Component</h2>
      <p>Points: {points}</p>
      <button onClick={() => setPoints(points + 2)}>Add Point/s</button>
      <button onClick={() => setPoints(points - 3)}>Subtract Point/s</button>
    </>
  )
}

export default UseStateComponent