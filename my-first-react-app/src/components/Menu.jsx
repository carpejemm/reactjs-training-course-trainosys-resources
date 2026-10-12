import MenuItem from './MenuItem'

const Menu = () => {

  const menuItems = [
    {
      id: 1,
      title: "Rice",
      img: "https://www.chopstickchronicles.com/wp-content/uploads/2018/11/how-to-cook-rice-cooker-in-a-rice-cooker_-20.jpg"
    },
    {
      id: 2,
      title: "Beans",
      img: "https://www.recipetineats.com/tachyon/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg?resize=500%2C500"
    },
    {
      id: 3,
      title: "Chicken",
      img: "https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_4318,h_4318,c_limit/RoastChicken_RECIPE_080420_37993.jpg"
    },
    {
      id: 4,
      title: "Fish",
      img: "https://www.foodandwine.com/thmb/e_AxXKHO17uoA4fYxhCznyUOFGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-roasted-branzino-caper-butter-hero-08-9fba308de97a4d7fbedc336965fe5111.jpg"
    },
    {
      id: 5,
      title: "Vegetables",
      img: "https://www.allrecipes.com/thmb/_KYeV9UYB7qaIp1eyw9e-1N_FQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13961-baked-vegetables-PIFS-3x2-81b83071372b4ec892ff385f69b3b682.jpg"
    }
  ]

  return (
    <>
      <div className="menuComponent">
        <h2>Menu for the Day</h2>
        <ul>
          {/* {
            menuItems.map(item => <li key={item.id}>{item.title}</li>)
          } */}
          {
            menuItems.map(item => 
              <MenuItem key={item.id} menuItem={item} />
            )
          }
        </ul>
      </div>
    </>
  )
}

export default Menu