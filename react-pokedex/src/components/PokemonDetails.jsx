import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const { pokemon } = useParams()

  console.log(pokemon)
  return (
    <div>
      <h2>{pokemon} Details</h2>
      {/* Display the details of the selected Pokemon here */}
    </div>
  )
}

export default PokemonDetails