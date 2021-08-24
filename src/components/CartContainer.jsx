import React, { useContext } from 'react';
// import styled from 'styled-components';
import Cart from '../Cart/Cart';
import { CartContext } from '../context/CartContext';


const CartContainer = () => {
  const context = useContext(CartContext);

  return (
    <div>
      <Cart context={context} />
    </div>
  );
};

export default CartContainer;