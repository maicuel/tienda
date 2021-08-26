import React from "react"
import { Link } from "react-router-dom"
import "./Item.scss";

const Item = ({ item }) => {
  return (
      <div className="column">
        <div className="card">
              <Link to={`/producto/${item.id}`} >
              <figure class="image">
                <img src={item.img} alt={item.nombre}  className="card__img" />
              </figure>
              </Link>
              <div className="listItem__descipcion">
                <h2 className="listItem__descripcion__titulo"> {item.nombre} </h2>
                <p className="listItem__descripcion__valor"> ${item.valor}</p>
              </div>
              <Link to={`/producto/${item.id}`} >ver más</Link>
          </div>
      </div>
  );
};

export default Item;


