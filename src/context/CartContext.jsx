import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const DataProvider = (props) => {
  const [cart, setCart] = useState([]);

  // GET LOCAL STORAGE ON LOAD
  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  // UPDATE LOCAL STORAGE ON CHANGE
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    if (cart.filter((element) => element.id === item.id).length === 0) {
      setCart([
        ...cart,
        {
          id: item.id,
          title: item.nombre,
          img: item.img,
          price: item.valor,
          quantity: quantity,
        },
      ]);
    } else {
      alert(
        'Ya tenés agregadas estampillas de ' + item.title + ' en tu carrito.'
      );
    }
  };

  const removeItem = (id) => {
    let cartWithoutIt = cart.filter((element) => element.id !== id);
    setCart(cartWithoutIt);
  };

  const clearAll = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default DataProvider;
