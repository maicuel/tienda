
import React, {useState} from 'react'
import '../styles/Home.scss'
import Loader from './Loader'
import { database } from '../firebase/config';
import { Link } from "react-router-dom"


const Home = ({title, subtitle}) => {

    const categoria = 'pizza';
    const [productosAMostrar, setproductosAMostrar] = useState([]);
  
    const obtenerProductos = () => {
      const productos = database
        .collection('productos')
        .where('categoria', '==', categoria)
        .limit(4);
      productos.get().then(query =>
        setproductosAMostrar(
          query.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
          })
        )
      );
    };
  
    obtenerProductos();

    return (     

        <>
            <section className="hero is-large is-black has-background">
                    <img className="hero-background is-transparent" 
                    src="https://firebasestorage.googleapis.com/v0/b/react-animales-michael.appspot.com/o/pizzeria%2Fpizza-5179939_960_720.jpg?alt=media&token=b68d8e29-2c14-4fbf-a0b3-e8734f8367c5" 
                    alt="Hero"
                    />
                    <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        {title}
                    </h1>
                    <h3 className="subtitle">
                        {subtitle}
                    </h3>
                    </div>
                </div>
            </section>
            
            <section className="section">

            {productosAMostrar.length ? 

                <div className="columns is-mobile is-multiline">
                {productosAMostrar.map(item => (
                    
                    <div item={item} key={item.id}  className="column column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                            <div className="card p-4 has-text-centered is-wide">
                                <Link to={`/producto/${item.id}`} >
                                <figure className="image">
                                    <img src={item.img} alt={item.nombre} className="card__img" />
                                </figure>
                                </Link>
                                <div className="item__descripcion p-3">
                                    <p className="item__descripcion__titulo card-header-title is-centered"> {item.nombre} </p>
                                    <p className="item__descripcion__valor"> ${item.valor}</p>
                                </div>
                                <Link to={`/producto/${item.id}`} className="button is-primary">ver más</Link>
                            </div>
                        </div>
                ))}
                </div>
                            
             : 
                <Loader />
            }
            </section>
         </> 


       
    )
}


export default Home







