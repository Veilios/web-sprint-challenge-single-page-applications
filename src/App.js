import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Order from "./Components/Order";
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="header">
        <h1 className="logo">Lambda Eats</h1>
        <div className="links">
          <Link className="home" to="/" >Home</Link>
          <Link to="/" >Help</Link>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={PizzaForm} />
      <Route path="/order" component={Order} />
    </div>
  );
};
export default App;
