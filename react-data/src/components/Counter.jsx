import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(2)

  // Popular Events
  // onClick
  // onChange
  // mouseOver
  // mouseOut
  // onDoubleClick
  // onFocus
  // onBlur
  // onSubmit
  // onKeyPress

  const handleDecrementCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className="counter-container">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 2)}>Increment</button>
        <button onClick={handleDecrementCount}>Decrement</button>
        <button onDoubleClick={() => setCount(0)}>Reset</button>
      </div>

    </>
  )
}

export default Counter