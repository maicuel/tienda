import React, { createContext, useState, useEffect } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

const DataProvider = (props) => {
  
  const [cart, setCart] = useState([])


  useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
          setCart(JSON.parse(localStorage.getItem('cart')))
        }
      }, [])
    
  useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, 
    [cart]);


  const addItem = (item) => {
    if (cart.filter((element) => element.id === item.id).length === 0) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
  
      Toast.fire({
        icon: 'success',
        text: 'Agregaste ' + item.cantidad + '  ' + item.nombre + ' en tu carrito.',
      })

      setCart([
        ...cart,
        {
          id: item.id,
          nombre: item.nombre,
          img: item.img,
          valor: item.valor,
          cantidad: item.cantidad,
        },
      ]);
    } 
    
    else {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        text: item.nombre + ' ya está en el carrito.',
      })

      
      
      
    }
  };


  const clearCart = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'warning',
      text: 'Se eliminaron todos los items del carrito.',
    })

    setCart([]);

  }
  
  const removeItem = (receivedItem) => {
    const newCart = cart.filter((item) => item.id !== receivedItem.id);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'warning',
      text: 'Se eliminó ' + receivedItem.nombre + ' del carrito.',
    })


    setCart(newCart);
  };


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        {props.children}
    </CartContext.Provider>
  )


};

export default DataProvider;