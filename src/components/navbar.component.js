
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">PantryApp</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/meals" className="nav-link">All Meals</Link>
            </li>
            <li className="navbar-item">
              <Link to="/createMeal" className="nav-link">Create Meal</Link>
            </li>
            <li className="navbar-item">
              <Link to="/ingredient" className="nav-link">All Ingredients</Link>
            </li>
            <li className="navbar-item">
              <Link to="/createIngredient" className="nav-link">Create Ingredient</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}