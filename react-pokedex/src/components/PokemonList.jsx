import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(POKEMON_API_URL)

        const responseDetails = await Promise.all(
          response.data.results.map(pokemon => axios.get(pokemon.url))
        )

        const refinedDetails = responseDetails.map(detail => detail.data)
        setPokemons(refinedDetails)
      } catch (error) {
        console.error(error)
      }
    }


    fetchPokemons()
  }, [])

  return (
    <>
      <h2>Pokemon List</h2>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PokemonList