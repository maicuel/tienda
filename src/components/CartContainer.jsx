import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../context/CartContext';


const CartContainer = () => {
  const context = useContext(CartContext);

  return (
    
      <Cart context={context} />

  );
};

export default CartContainer;