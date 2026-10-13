import UseStateComponent from './components/UseStateComponent'
import UseEffectComponent from './components/UseEffectComponent'
import UseContextComponent from './components/UseContextComponent'
import UseReducerComponent from './components/UseReducerComponent'
import './App.css'

const App = () => {

  return (
    <>
      <h1>React Hooks</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
      <UseReducerComponent />
    </>
  )
}

export default App
