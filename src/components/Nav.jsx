import React from "react";
import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"
import logo from '../../src/logo.png'; 
import "../styles/Nav.scss";

const Nav = () => {

    return (
            <div className="container">
                <nav className="navbar py-2" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item"> <img src={logo} alt="La Pizzeria" className="image" /> </Link>

                        <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
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
            </div>
           
    )
}

export default Nav
