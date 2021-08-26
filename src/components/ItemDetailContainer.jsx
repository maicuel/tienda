import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { database } from "../firebase/config"


const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState([])
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(1)
  const itemId = useParams()

  useEffect(() => {
    const dbProducts = database.collection("productos")
    const item = dbProducts.doc(itemId.id)
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No existe')
          setSelectedItem(404)
          return
        }
        setSelectedItem({ ...doc.data(), id: doc.id })
      })
      .catch((error) => console.log('Error: ' + error))
      .finally(() => setLoading(false))
  }, [itemId])


  return (
    <div>
      <ItemDetail
        loading={loading}
        item={selectedItem}
        count={count}
        setCount={setCount}
      />
    </div>
  )
}

export default ItemDetailContainer