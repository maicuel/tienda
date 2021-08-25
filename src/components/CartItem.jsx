import React , {useContext} from "react";
import { CartContext } from "../context/CartContext";



const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
        <tr>
          <td>  <img src={item.img} alt={item.nombre} className="cart-img"/></td>

          <td> <h2> {item.nombre} </h2> </td>

          {/* <td>Cantidad: {item.cantidad} x ${item.valor} = $ {item.cantidad * item.valor}</td> */}

          <td> {item.cantidad} </td>
          <td> {item.valor} </td>

          
          <td><button onClick={() => removeItem(item)}>Quitar</button></td>
        </tr>
    </div>
  );
};

export default CartItem;
