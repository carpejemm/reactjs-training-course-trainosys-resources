const MenuItem = ({ menuItem }) => {
  return (
    <>
      <div className="menuItem">
        <h3>{menuItem.title}</h3>
        <img src={menuItem.img} alt={menuItem.title} width="200" />
      </div>
    </>
  )
}

export default MenuItem