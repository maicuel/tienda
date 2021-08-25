import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



const CartIcon = () => {
  const context = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        {/* <img src={Cart} alt="Carrito" /> */}
        {context.cart.length > 0 && (
          <span>{context.cart.length}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;