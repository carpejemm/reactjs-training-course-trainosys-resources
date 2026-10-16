import Button from './components/Button'
import Counter from './components/Counter'
import './App.css'

const App = () => {

  const handleClick = () => {
    console.log('Button Clicked')
  }

  return (
    <>
      <h1>React Unit Testing with Vitest</h1>
      <Button handleClickBtn={handleClick} label="Click Me" />
      <Counter />
    </>
  )
}

export default App
