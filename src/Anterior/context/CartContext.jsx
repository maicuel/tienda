// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const DataProvider = (props) => {
//   const [cart, setCart] = useState([]);

//   // GET LOCAL STORAGE ON LOAD
//   useEffect(() => {
//     if (localStorage.getItem('cart') !== null) {
//       setCart(JSON.parse(localStorage.getItem('cart')));
//     }
//   }, []);

//   // UPDATE LOCAL STORAGE ON CHANGE
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addItem = (item, quantity) => {
//     if (cart.filter((element) => element.id === item.id).length === 0) {
//       setCart([
//         ...cart,
//         {
//           id: item.id,
//           title: item.nombre,
//           img: item.img,
//           price: item.valor,
//           quantity: quantity,
//         },
//       ]);
//     } else {
//       alert(
//         'Ya tenés agregadas estampillas de ' + item.title + ' en tu carrito.'
//       );
//     }
//   };

//   const removeItem = (id) => {
//     let cartWithoutIt = cart.filter((element) => element.id !== id);
//     setCart(cartWithoutIt);
//   };

//   const clearAll = () => setCart([]);

//   return (
//     <CartContext.Provider value={{ cart, addItem, removeItem, clearAll }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default DataProvider;


import React, { createContext, useState, useEffect } from "react"
import swal from 'sweetalert';


export const CartContext = createContext()

const DataProvider = (props) => {
  
  const [cart, setCart] = useState([])


  useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
          setCart(JSON.parse(localStorage.getItem('cart')))
        }
      }, [])
    
  useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, 
    [cart]);


    const addItem = (item) => {
    if (cart.filter((element) => element.id === item.id).length === 0) {

      swal( {
        title: "Muy Bien!",
        icon: "success",
        timer: 3000,
        text: 'Se agrego '  + item.cantidad + ' ' + item.nombre +  ' en tu carrito.',
      });

      setCart([
        ...cart,
        {
          id: item.id,
          nombre: item.nombre,
          img: item.img,
          valor: item.valor,
          cantidad: item.cantidad,
        },
      ]);
    } else {
      alert(
        'Ya tienes ' + item.nombre + ' en tu carrito.'
      );
    }
  };




  // const inCart = (receivedItem) => {
  //   const verificar = cart.filter((item) => item.id === receivedItem.id);
  //   return verificar.length > 0;
  // };




  const clearCart = () => setCart([]);


  const removeItem = (receivedItem) => {
    const newCart = cart.filter((item) => item.id !== receivedItem.id);
    setCart(newCart);
  };


  // const values = {
  //   cart,
  //   setCart,
  //   addItem,
  //   inCart,
  //   clearCart,
  //   removeItem
  // };


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        {props.children}
    </CartContext.Provider>
  )


};

export default DataProvider;

