import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../context/CartContext';


const CartContainer = () => {
  const context = useContext(CartContext);

  return (
    <table>
      <Cart context={context} />
    </table>
  );
};

export default CartContainer;