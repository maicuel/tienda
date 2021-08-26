import React from "react";
import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"



const Nav = () => {

    return (
        <div>





            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item"> Pizzeria </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/categoria/pizza" className="navbar-item"> Pizzas </Link>
                        <Link to="/categoria/bebidas" className="navbar-item"> Bebidas </Link>
                        <Link to="/categoria/postre" className="navbar-item"> Postres </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CartIcon />
                        </div>
                    </div>
                </div>

            </nav>







           {/* <nav classNameName="navbar">
            <div classNameName="logo">
                <Link classNameName="logo-text" exact to="/">
                Pizzeria
                </Link>
            </div>
            <div classNameName="item-list">
                <ul classNameName="menu">
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
            </nav> */}
        </div>
    )
}

export default Nav



