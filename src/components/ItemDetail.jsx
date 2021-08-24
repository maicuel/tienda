// import React, { useState, useContext } from "react"
// import { CartContext } from "../context/CartContext"
// import { Link } from "react-router-dom"
// import Counter from "./Counter"

// function ItemDetail({ item }) {
//   const { addToCart, inCart, deleteItem } = useContext(CartContext)

//   const initial = 1
//   const [count, setCount] = useState(initial)




//   const sendItemToCart = () => {
//     addToCart({ ...item, cantidad: count })
//   }

//   return (
//     <div>
//       <img src={item.img} alt={item.nombre} />
//       <div>
//         <h2>
//           {item.nombre}
//         </h2>
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
//                 initial={initial}
//                 count={count}
//                 setCount={setCount}
//               />
                
//               <button
//                 onClick={() => {
//                   sendItemToCart()
//                 }}
//               >
//                 Agregar al Carrito
//               </button>

              
//             </div>
//           : <div>
//               <p>
//                 Agregado(s) {count} producto/s al Carrito
//               </p>
//               <Link to="/cart">
//                 <button>Terminar Compra</button>
//               </Link>
//               <button
//                 onClick={() => {
//                   deleteItem(item)
//                 }}
//               >
//                 Modificar Compra
//               </button>
//               <Link to="/">
//                 <button>Seguir comprando</button>
//               </Link>
//             </div>}
//       </div>
//     </div>
//   )
// }

// export default ItemDetail


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext"
import Counter from "./Counter"



const ItemDetail = ({
  loading,
  stamp,
//   handleButton,
  buttonVisibility,
  count,
  setCount,
}) => {
  const context = useContext(CartContext);
  return (
    <>
      {loading ? (
        <div className="loading loading-lg"></div>
      ) : stamp === 404 ? (
        <div>
          <h1>404</h1>
          <h3>Producto no encontrado.</h3>
          <Link to="/">
            <button className="btn btn-primary">Volver</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <img src={stamp.img} alt={stamp.nombre} />
            
          </div>
          <div>
            <h2>{stamp.title}</h2>
            <b>Precio: ${stamp.valor}</b>
            <i>Stock: {stamp.stock}</i>
            <Counter
              initial={0}
              stock={stamp.stock}
            //   handleButton={handleButton}
              count={count}
              setCount={setCount}
            />

            <Link
              to="/cart"
              className={`btn btn-primary ${!buttonVisibility && 'disabled'}`}
              onClick={() => context.addItem(stamp, count)}
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