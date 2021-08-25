import React from "react";
import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"


const Nav = () => {

    return (
        <div>
           <nav className="navbar">
            <div className="logo">
                <Link className="logo-text" exact to="/">
                Pizzeria
                </Link>
            </div>
            <div className="item-list">
                <ul className="menu">
                <li>
                    <Link to="/categoria/pizza"> Pizzas </Link>
                </li>
                <li>
                    <Link to="/categoria/bebidas"> Bebidas </Link>
                </li>
                <li>
                    <Link to="/categoria/postre"> Postres </Link>
                </li>
                </ul>
            </div>
            <div>
                <CartIcon />
            </div>
            </nav>
        </div>
    )
}

export default Nav

