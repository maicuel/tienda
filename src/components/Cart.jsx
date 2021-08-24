import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { Link } from 'react-router-dom';
// import { getFirestore } from '../../firebase/index';
// import Bin from '../../assets/bin.svg';
// import Form from './Form';

import { database } from "../firebase/config"


const Cart = ({ context }) => {
  const [userInfo, setUserInfo] = useState();
  const [modal, setModal] = useState(false);
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    if (userInfo) {
    //   const database = getFirestore();
      const orders = database.collection('orders');

      const newOrder = {
        buyer: userInfo,
        items: context.cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: getTotal(),
      };

      orders
        .add(newOrder)
        .then(({ id }) => {
          setOrderId(id);
          //Update Stock

          const stampsToUpdate = database.collection('stamps').where(
            firebase.firestore.FieldPath.documentId(),
            'in',
            context.cart.map((i) => i.id)
          );

          const updateStock = async () => {
            const query = await stampsToUpdate.get();
            const batch = database.batch();
            query.docs.forEach((docSnapshot, idx) => {
              batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - context.cart[idx].quantity,
              });
            });
            batch.commit();
          };

          updateStock();
        })
        .catch((err) => alert('Error: ' + err))
        .then(() => {
          setModal(true);
          setUserInfo();
          context.clearAll();
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const getQuantity = () => {
    let amount = 0;
    context.cart.map((item) => (amount = amount + item.quantity));
    return amount;
  };

  const getTotal = () => {
    let total = 0;
    context.cart.map((item) => (total = total + item.price * item.quantity));
    return total;
  };

  return (
    <div>
      <h1>Carrito</h1>
      {context.cart.length === 0 ? (
        <div className="no-items">
          <h2>No hay items para mostrar.</h2>
          <Link to="/">
            <button className="btn btn-primary">Volver</button>
          </Link>
        </div>
      ) : (
        <div className="container">
          <div>
            <h2>Datos de la orden</h2>
            {context.cart.map((item) => (
              <div key={item.id}>
                <img src={item.img} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <i>{item.quantity} unidades</i>
                  <b>${item.price}</b>
                  {/* <img
                    src={Bin}
                    alt="Delete item"
                    className="bin"
                    onClick={() => context.removeItem(item.id)}
                  /> */}
                </div>
              </div>
            ))}
            <span className="h2">Cant. de Estampillas: {getQuantity()}</span>
            <span className="h2">Total: ${getTotal()}</span>
          </div>

          {/* <Form setUserInfo={setUserInfo} /> */}
        </div>
      )}
      {/* <div className={`modal ${modal ? 'active' : ''}`}>
        <div className="modal-overlay" onClick={() => setModal(false)}></div>
        <div className="modal-container">
          <div className="modal-body">
            <h3>ID de su compra: </h3>
            <p className="text-primary h3">{orderId}</p>
            <button className="btn btn-primary" onClick={() => setModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;