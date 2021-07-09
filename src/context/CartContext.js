import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const CartContext = createContext()

const { Provider } = CartContext

const CustomPovider = ({ children }) => {
 
 const [carrito, setCarrito] = useState(["Vino Rutini Regalo Estuche Madera X3 Edición Limitada"])
 const[quantity, setQuantity] = useState(0)
 
 const comprar = (item) =>{
  console.log(carrito)
   setCarrito([ ...carrito,item])
   
}

useEffect(()=>{
  setQuantity(carrito.length)
 
},[carrito])

console.log(quantity)


return (
  <Provider value={{comprar, carrito, setQuantity, quantity}}>

  {children}
 </Provider>

 )
}
export default CustomPovider

