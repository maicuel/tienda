import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { faTimes , faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(
    () => {
      let calculatedTotal = 0;
      cart.forEach(item => {
        calculatedTotal += item.valor * item.cantidad;
      });
      setTotal(calculatedTotal);
    },
    [cart]
  );

  return (
    <section className="section">
      {!cart.length
        ? <div className="container">


            <div className="my-6">
              <p className="title is-2">Carrito vacío</p>
            </div>


            <Link to="/" className="button is-success">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                <span>volver</span>
            </Link>

          </div>
        : <div className="container mt-6">

          <div className="my-6">
            <p className="title is-2">Mi pedido:</p>
          </div>
           

            <div className="container">
              {cart.map(item =>
                <CartItem item={item} key={item.id}  />
              )}
            </div>

          

           <div className="container">
            <div className="column is-three-fifths is-offset-one-fifth mt-6">
            <div className="columns ">
            <div className="column has-text-weight-bold is-size-5">
                Total : ${total}
              </div>
              <div className="column">
              <button className="button is-danger is-outlined" onClick={() => clearCart()}>
                <span>Vaciar Carro</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </button>
              </div>
              <div className="column">
              <button className="button is-success">
                <span>Comprar</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </button>
              </div>
           </div>

            </div>
          </div>
          </div>}
    </section>
  );
};

export default Cart;