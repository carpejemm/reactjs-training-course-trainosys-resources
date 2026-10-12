import TSIcon from '../assets/trainosys-icon.jpeg'

// Functional component for the Trainosys icon
/**
 * TrainosysIcon component
 *
 * This component renders the Trainosys icon image with a fixed width and height of 100 pixels.
 */
const TrainosysIcon = () => {
  const userName = "carpejemm"
  const firstName = "Jem"
  const lastName = "Laguda"
  const age1 = 20
  const age2 = 8

  // Function to get the full name of the user
  const getFullName = () => {
    // Object literal syntax
    return `${firstName} ${lastName}`
  }


  return (
    <>
    <div className="trainosysIconComponent">
      <div>Trainosys Icon Component</div>
      {/* Interpolation of user information: */}
      <div>Current User: {userName}</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Age: {10 + 10 + 10}</div>
      <div>Age1: {age1 + age2}</div>
      <div>Full Name: {getFullName()}</div>
      {/* If is allowed inside JSX but it must ternary operator syntax */}
      {
        age1 > age2 ? <div>Age1 is greater than Age2</div> : <div>Age1 is not greater than Age2</div>
      }

      {
        age1 > 18 
        ? 
        <div>{userName} is an adult</div>
        : 
        <div>{userName} is not an adult</div>
      }

      {/* Trainosys icon section: */}
      <div>
        <img src={TSIcon} width="100" height="100" alt="Trainosys icon" />
      </div>
      <button>Learn More</button>
    </div>
    </>
  )
}

export default TrainosysIcon