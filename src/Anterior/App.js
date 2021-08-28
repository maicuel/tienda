import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bulma/css/bulma.min.css'
import Nav from "./components/Nav"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import DataProvider from "./context/CartContext"
import Home from './components/Home'
import Cart from "./components/Cart"
import Footer from "./components/Footer"

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home title="Lo mejor en pizzas." subtitle="¡Somos una pizzería al paso donde podrás encontrar las mejores pizzas artesanales de Santiago!"/>
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
      <Footer copy="Desarrollado por Michael Robinson"/>

    </DataProvider>
  )
}

export default App
