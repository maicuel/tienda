import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import "./App.css"
import Nav from "./components/Nav"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import DataProvider from "./context/CartContext"
import Cart from "./components/Cart"

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:catId">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  )
}

export default App
