// import React, { useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import Counter from "./Counter";

// function ItemDetail({ item }) {
//   const { addItem, removeItem, inCart} = useContext(CartContext);

//   // const initial = 1;
//   const [count, setCount] = useState();

//   const addToCart = () => {
//     addItem({ ...item, cantidad: count });
//   };

//   return (
//     <div>
//       <img src={item.img} alt={item.nombre} />
//       <div>
//         <h5>
//           {item.nombre}
//         </h5>
//         <small>stock: {item.stock}</small>
//         <p>
//                 Precio: {item.valor}
//               </p>
//               <p>
//                 {item.descripcion}
//               </p>



//         {!inCart(item)
//           ? <div>
//               <Counter
//                 stock={item.stock}
//                 // initial={initial}
//                 count={count}
//                 setCount={setCount}
//               />

//               <button onClick={() =>  addToCart() }>
//                 Agregar al Carrito
//               </button>
//             </div>
//           : <div>
//               {/* <p>
//                 Tienes {count} {item.nombre} en el Carrito
//               </p> */}
//               <Link to="/cart">
//                 <button>Terminar Compra</button>
//               </Link>
//               {/* <button
//                 onClick={() => {
//                   removeItem(item);
//                 }}
//               >
//                 Modificar Compra
//               </button> */}
//               <Link to="/">
//                 <button>Seguir comprando</button>
//               </Link>
//             </div>}
//       </div>
//     </div>
//   );
// }

// export default ItemDetail;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Counter from './Counter';


const ItemDetail = ({
  loading,
  item,
  count,
  setCount,
}) => {
  const  { addItem } = useContext(CartContext);

  return (
    <>
      {loading ? (
        <div>cargando</div>
      ) : item === 404 ? (
        <div>
          <h1>404</h1>
          <h3>Producto no encontrado.</h3>
          <Link to="/">
            <button>Volver</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <img src={item.img} alt={item.nombre} />
          </div>
          <div>
            <h2>{item.nombre}</h2>
            <b>Precio: ${item.valor}</b>
            <i>Stock: {item.stock}</i>
            <Counter
              initial={0}
              stock={item.stock}
              count={count}
              setCount={setCount}
            />

            <Link
              to="/cart"
              onClick={() =>  addItem({ ...item, cantidad: count })}
            >
              Agregar al Carrito
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;