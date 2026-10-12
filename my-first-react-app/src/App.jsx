import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import TrainosysIcon from './components/TrainosysIcon'
import Menu from './components/Menu'

// Component: App
// Component Name - App
// This is our main App component

/**
 * App component
 */
const App = () => {
  const [count, setCount] = useState(0)

  return (
    // Empty Fragment
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          // this is an event handler for the button click
          onClick={() => setCount((count) => count + 1)}
        >
          {/* Interpolation
          Interpolated value of count */}
          Count is {count}
        </button>
        <button>{count}</button>
      </section>

      <section>
        <Menu />
        <TrainosysIcon />
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
