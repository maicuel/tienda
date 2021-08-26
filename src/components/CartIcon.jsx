import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const CartIcon = () => {
  const context = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        {context.cart.length > 0 && (
          <span>{context.cart.length}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;