import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Order from "./Components/Order";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/" >Home</Link>
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
