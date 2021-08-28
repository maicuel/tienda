import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Loader from "./Loader"
import Item from "./Item"
import { database } from "../firebase/config"


const ItemListContainer = () => {

  const [displayItems, setDisplayItems] = useState([])
  const { catId } = useParams()
  
  useEffect(() => {
    setDisplayItems([])
    const dbProducts = database.collection("productos")

    if (catId) {
      dbProducts
        .where("categoria", "==", catId)
        .get()
        .then((query) =>
          setDisplayItems(
            query.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        )
    } else {
      dbProducts.get().then((query) =>
        setDisplayItems(
          query.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      )
    }
  }, [catId])
  return !displayItems.length
    ? 
    <Loader />
    : 
    <section className="section">
      <div className="columns is-mobile is-multiline">
        {displayItems.map(item => <Item item={item} key={item.id} />)}
      </div>
    </section>

}

export default ItemListContainer