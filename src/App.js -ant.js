import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import "./App.css"
import 'bulma/css/bulma.min.css'
import Nav from "./components/Nav"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import DataProvider from "./context/CartContext"
import Cart from "./components/Cart"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero"

function App() {
  return (
    
    <DataProvider>
      <Router>
        <Hero />
      
        <Nav />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/categoria/:catId">
            <ItemListContainer />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
      <Footer />

    </DataProvider>
  )
}

export default App
