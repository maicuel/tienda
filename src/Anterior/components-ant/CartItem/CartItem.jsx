import React , {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartItem.scss";



const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="columns is-vcentered">
        <div className="column has-text-centered">
           <img src={item.img} alt={item.nombre} className="image is-48x48"/>
        </div>

        <div className="column">
          <Link to={`/producto/${item.id}`}>{item.nombre}</Link> 
        </div>

        <div className="column has-text-centered">
          {item.cantidad}
        </div>

        <div className="column has-text-centered">
          ${item.valor} 
        </div>

        <div className="column has-text-centered">
          ${item.cantidad * item.valor}
        </div>

        <div className="column has-text-centered">
            <button class="button is-danger" onClick={() => removeItem(item)}>
              <span class="icon is-small">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </button>
        </div>
</div>

  );
};

export default CartItem;
