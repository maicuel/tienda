import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/CartIcon.scss'

const CartIcon = () => {
  const context = useContext(CartContext);

  return (
    <div className="button is-primary is-outlined" >
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
          {context.cart.length > 0 && (
            <span className="ml-1">{context.cart.length}</span>
          )}
      </Link>
    </div>
  );
};

export default CartIcon;