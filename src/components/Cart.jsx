import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem/CartItem";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Form from "./Form";

const Cart = () => {
  const { cart, deleteItem, clearCart } = useContext(CartContext);

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
    <div>
      {!cart.length
        ? <div>
            <h3>Carrito sin Items</h3>
            <Link to="/">
              <button>Volver</button>
            </Link>
          </div>
        : <div className="container mt-6">
            <h3>Lista de compras:</h3>

            <div className="container">

              {cart.map(item =>
                <CartItem item={item} key={item.id}  />
              )}

            </div>


            <div class="columns is-mobile">
              <div class="column is-4 is-offset-8"></div>
            </div>


           <div className="columns mt-6">
            <div className="column">
                Total : ${total}
              </div>
              <div className="column">
              <button class="button is-danger is-outlined" onClick={() => clearCart()}>
                <span>Vaciar Carro</span>
                <span class="icon is-small">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </button>
              </div>
           </div>




            {/* <button onClick={() => clearCart()}>Vaciar Carrito</button> */}
            {/* <Form cart={cart} total={total} clearCart={clearCart} /> */}
          </div>}
    </div>
  );
};

export default Cart;
