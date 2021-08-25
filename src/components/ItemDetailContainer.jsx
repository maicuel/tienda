// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// // import Loader from "../Loader/Loader";
// import ItemDetail from "./ItemDetail";
// import { database } from "../firebase/config"

// function ItemDetailContainer() {

//   const { id } = useParams();

//   const [item, setItem] = useState({});

//   useEffect(() => {
//     setItem({});
//     const itemDatabase = database.collection("productos").doc(id);

//     itemDatabase.get().then((res) => {
//       setItem({ ...res.data(), id: res.id });
//     });
//   }, [id]);




//   return (Object.entries(item).length === 0)
//     ? <div>cargando</div>
//     : <ItemDetail item={item} key={item.id} />;
// }

// export default ItemDetailContainer;


import React, { useState, useEffect } from 'react';

// import { getFirestore } from '../../firebase/index';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import { database } from "../firebase/config"


const ItemDetailContainer = ({ stamps }) => {
  const [selectedStamp, setSelectedStamp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [count, setCount] = useState(0);
  const itemId = useParams();

  useEffect(() => {
    // const database = getFirestore();

      const dbProducts = database.collection("productos")

    // const database = database.collection('productos');
    const item = dbProducts.doc(itemId.id);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No existe');
          setSelectedStamp(404);
          return;
        }
        setSelectedStamp({ ...doc.data(), id: doc.id });
      })
      .catch((error) => console.log('Error: ' + error))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleButton = (value) => {
    value > 0 ? setButtonVisibility(true) : setButtonVisibility(false);
  };

  return (
    <div>
      <ItemDetail
        loading={loading}
        item={selectedStamp}
        handleButton={handleButton}
        buttonVisibility={buttonVisibility}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default ItemDetailContainer;