import React , {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"



const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    

        <tr>
          <td>  <img src={item.img} alt={item.nombre} className="cart-img"/></td>



          <td> <h2> <Link to={`/producto/${item.id}`}>{item.nombre}</Link> </h2> </td>

          

          {/* <td>Cantidad: {item.cantidad} x ${item.valor} = $ {item.cantidad * item.valor}</td> */}

          <td> {item.cantidad} </td>
          <td> {item.valor} </td>

          
          <td><button onClick={() => removeItem(item)}>Quitar</button></td>
        </tr>


  );
};

export default CartItem;
