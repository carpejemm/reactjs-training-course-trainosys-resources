import Card from '../components/Card' 

const ProductDashboard = () => {

const products =[
  {
    title: 'Shirt',
    content: 'Shirt',
    img: 'https://media.mango.com/is/image/punto/37054417-44-002?wid=2048'
  },
  {
    title: 'Jacket',
    content: 'Jacket',
    img: 'https://static.pullandbear.net/assets/public/be29/bebb/961442dd9e4c/49a74727f73a/07721544833-A7M/07721544833-A7M.jpg?ts=1787301391590&w=1082&f=auto'
  },
  {
    title: 'Pants',
    content: 'Pants',
    img: 'https://styleshops.com.ph/cdn/shop/files/unica-bottoms-ree-pants-44094474649831.png?v=1736304770'
  }
]

  return (
    <>
      <h2>Product Dashboard</h2>
      {
        products.map(product =>(
          <div key={product.title}>
            <Card 
              title={product.title}
              content={product.content}
              img={product.img}
            />
          </div>
        ))
      }
    </>
  )
}

export default ProductDashboard