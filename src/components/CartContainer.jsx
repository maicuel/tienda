import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../context/CartContext';


const CartContainer = () => {
  const context = useContext(CartContext);

  return (
    <div className="container">
      <div class="box">
        <Cart context={context} />
      </div>
    </div>
  );
};

export default CartContainer;
