import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
           <nav className="navbar">
            <div className="logo">
                <NavLink className="logo-text" exact to="/">
                Pizzeria
                </NavLink>
            </div>
            <div className="item-list">
                <ul className="menu">
                <li>
                    <NavLink className="item" to="/category/pizza">
                    Pizzas
                    </NavLink>
                </li>
                <li>
                    <NavLink className="item" to="/category/bebidas">
                    Bebidas
                    </NavLink>
                </li>
                <li>
                    <NavLink className="item" to="/category/postre">
                    Postres
                    </NavLink>
                </li>
                </ul>
            </div>
            <div className="carrito">
                {/* <CartIcon /> */}
            </div>
            </nav>
        </div>
    )
}

export default Nav
