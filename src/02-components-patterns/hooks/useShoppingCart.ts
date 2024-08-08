import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";







export const useShoppingCart = () =>{

    const [shoppingCart, setshopingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
  
  
  
  
  
      setshopingCart(oldShoppinCart => {
  
        const productInCart: ProductInCart = oldShoppinCart[product.id] || { ...product, count: 0 }
  
  
        if (Math.max(productInCart.count + count, 0) > 0) {
          productInCart.count += count;
          return {
            ...oldShoppinCart,
            [product.id]: productInCart
          }
  
        }
        // borrar el producto
        const { [product.id]: toDelet, ...rest } = oldShoppinCart;
        return { ...rest };
  
  
  
        //   if (count === 0) {
  
        //     const { [product.id]: toDelet, ...rest } = oldShoppinCart;
        //     console.log({ toDelet });
  
        //     return rest;
  
        //   }
  
        //   return {
        //     ...oldShoppinCart,
        //     [product.id]: { ...product, count }
        //   }
      })
    }
    
 
   return{
    
    shoppingCart,

    onProductCountChange
   }
 }
 




