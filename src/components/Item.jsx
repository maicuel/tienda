import React from "react"
import { Link } from "react-router-dom"


const Item = ({ item }) => {
  return (
      <div className="column column is-half-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div className="card p-4 has-text-centered is-wide">
              <Link to={`/producto/${item.id}`} >
              <figure className="image">
                <img src={item.img} alt={item.nombre}  className="card__img" />
              </figure>
              </Link>
              <div className="item__descripcion p-3">
                <p className="item__descripcion__titulo card-header-title is-centered"> {item.nombre} </p>
                <p className="item__descripcion__valor"> ${item.valor}</p>
              </div>
              <Link to={`/producto/${item.id}`} className="button is-primary">ver más</Link>
          </div>
      </div>
  );
};

export default Item;