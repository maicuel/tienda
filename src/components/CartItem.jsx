import React , {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CartItem.scss";



const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <table class="table is-narrow is-fullwidth">
      <tbody>
        <tr>
          <td>
            <img src={item.img} alt={item.nombre} className="image is-48x48"/>
          </td>
          <td>
          <Link to={`/producto/${item.id}`}>{item.nombre}</Link> 
          </td>
          <td>
             {item.cantidad}
          </td>
          <td>
            ${item.valor}
          </td>
          <td>
            ${item.cantidad * item.valor}
          </td>
          <td>
            <button class="button is-danger" onClick={() => removeItem(item)}>
              <span class="icon is-small">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </button>
          </td>
        </tr>
      </tbody>
      </table>

  );
};

export default CartItem;