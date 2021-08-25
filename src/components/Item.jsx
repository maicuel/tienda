import React from "react"
import { Link } from "react-router-dom"

const Item = ({ item }) => {
  return (
    
      <div>
        <img src={item.img} alt={item.nombre} />
        <div>
        <Link to={`/producto/${item.id}`}>
          <h5>
            {item.nombre}
          </h5>
          </Link>
          <p>
            {item.descripcion}
            Precio: {item.valor}
          </p>
          <button>ver más</button>
        </div>
      </div>
   
  );
};

export default Item;
