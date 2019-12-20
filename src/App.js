import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import CreateIngredient from "./components/create-ingredient.component";
import IngredientsList from "./components/ingredients-list.component";
import MealsList from "./components/meals-list.component";
import CreateMeal from "./components/create-meal.component";
import LoginRegistration from "./components/auth/registration.component";
import LoginUser from "./components/auth/login.component";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <div className="container">
          <Route path="/" exact component={MealsList} />
          <Route path="/meals" component={MealsList} />
          <Route path="/createMeal" component={CreateMeal} />
          <Route path="/ingredient" component={IngredientsList} />
          <Route path="/createIngredient" component={CreateIngredient} />
          <Route path="/registration" component={LoginRegistration} />
          <Route path="/login" component={LoginUser} />
        </div>
      </div>
    </Router>
  );
}

export default App;
