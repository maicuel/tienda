import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../context/CartContext';


const CartContainer = () => {
  const context = useContext(CartContext);

  return (
    <div className="container">
      <Cart context={context} />
    </div>
  );
};

export default CartContainer;