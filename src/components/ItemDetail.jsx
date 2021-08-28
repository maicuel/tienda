import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Counter from './Counter';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ItemDetail = ({  item, count, setCount }) => {
  const  { addItem } = useContext(CartContext);
  return (
    <div className="container">
      { item === 404 ? (
        <div className="columns">
          <div>
            <p className="title is-2">404</p>
            <h3>Producto no encontrado.</h3>
            <Link to="/" className="button is-success">
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                  <span>volver</span>
              </Link>
          </div>
        </div>
       
      ) 
      : 
      (
          <div className="columns">

          <div className="column is-one-third">
            <figure className="image">
              <img src={item.img} alt={item.nombre} />
            </figure>
          </div>

          <div className="column">
            <p className="is-size-2 is-uppercasehas-text-weight-bold mn-3">{item.nombre}</p>
            <p className="">${item.valor}</p>
            <p>Stock: {item.stock}</p>
            <p className="my-6">{item.descripcion}</p>

            <Counter
              initial={1}
              stock={item.stock}
              count={count}
              setCount={setCount}
            />

            <button onClick={() =>  addItem({ ...item, cantidad: count })} className="button is-primary">
              Agregar al Carrito
            </button>
          </div>
          
        </div>
      )}


    </div>
  );
};

export default ItemDetail;