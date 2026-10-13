import TeamDetails from './TeamDetails'

const ScoreWidget = props => {
// const ScoreWidget = ({ points, playerName, team }) => {

  // destructure props into individual variables
  const { points, playerName, team } = props;

  // Conditionals
  // && - OR - 
  // || - AND
  // ! - NOT
  // ?? - Nullish Coalescing Operator
  // !! - Double Negation (converts a value to its boolean equivalent)
  // Example Usage:

  console.log(points, playerName, team);


  return (
    <>
      <div className="score-widget-container">
        <h2>Score Widget Component (Child Component)</h2>
        <p>Points: {points}</p>
        <p>Player Name: {playerName}</p>
        {
          points > 10 && <TeamDetails teamDetails={team} />
        }
        
        {/* Example Usage of Conditionals */}
        {points > 10 && <p>High Scorer!</p>}
        {!points && <p>No points scored yet.</p>}
        {
          points > 10 || points === 0 && <p>No points scored yet again.</p>
        }
      </div>
    </>
  )
}

export default ScoreWidget