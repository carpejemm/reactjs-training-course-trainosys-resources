import { useState } from 'react'
// Props Drilling
const TeamDetails = props => {

  const [playerName, setPlayerName] = useState("Michael Jordan");
  // playerName - variable to store the player's name from state
  // setPlayerName - updater function - this is used to update the player's name in state
  // useState - React Hook used to add state to functional components


  // const playerName = "Michael Jordan"
  // const setPlayerName = () => {
  //   playerName = "Kevin Durant"
  // }



  return (
    <div className="team-details-container">
      <h2>Team Details Component (Grandchild Component)</h2>
      <h2>Player Name: {playerName}</h2>
      <button
        onClick={() => setPlayerName("Kevin Durant")}
      >
        Change Player Name
      </button>
      <p>Team Name: {props.teamDetails}</p>
    </div>
  )
}

export default TeamDetails