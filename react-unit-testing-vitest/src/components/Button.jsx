const Button = ({ handleClickBtn, label}) => {
  return (
    <button onClick={handleClickBtn}>{label}</button>
  )
}

export default Button