import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
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
        : <div>
            <h3>Lista de compras:</h3>
            {cart.map(item =>
              <CartItem item={item} key={item.id}  />
            )}
            <h5>
              Total : ${total}
              
            </h5>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            {/* <Form cart={cart} total={total} clearCart={clearCart} /> */}
          </div>}
    </div>
  );
};

export default Cart;
