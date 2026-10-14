import { Routes, Route } from 'react-router-dom'
import PokemonList from './components/PokemonList.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import './App.css'

const App = () => {

  return (
    <>
      <h1>Welcome to React Pokedex</h1>
      {/* Create a component to display each Pokemon's details.
      Using react router, let's make the routing dynamic */}
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path={`/:pokemon`} element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App
