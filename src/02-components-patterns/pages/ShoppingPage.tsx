import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './Coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store

      </h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard 
        product={product}
         className="bg-dark text-white"
         >
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title={'Hola mundo'} className="text-bold" />
          <ProductCard.Buttons  className="custom-buttons  "/>
        </ProductCard  >


        <ProductCard 
        product={product} 
        className="bg-dark text-white "
        >
          <ProductImage className="custom-image" style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.5)'}}/>
          <ProductTitle  className="text-bold" />
          <ProductButtons  className="custom-buttons" />
        </ProductCard  >


        <ProductCard 
        product={product} 
        style={{
          background:'#70D1F8'
        }}
        >
          <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.5)'}}/>
          <ProductTitle style={{fontWeight:'bold'}}/>
          <ProductButtons style={{display:'flex', justifyContent:'end'}} />
        </ProductCard  >

      </div>

    </div>
  )
}