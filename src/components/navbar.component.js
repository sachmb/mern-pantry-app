
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    // const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    // const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler collapsed' : 'navbar-toggler';
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <NavLink to="/" className="navbar-brand">PantryApp</NavLink>
        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${classOne}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/meals" className="nav-link" onClick={this.toggleNavbar}>All Meals</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/createMeal" className="nav-link" onClick={this.toggleNavbar}>Create Meal</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ingredient" className="nav-link" onClick={this.toggleNavbar}>All Ingredients</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/createIngredient" className="nav-link" onClick={this.toggleNavbar}>Create Ingredient</NavLink>
            </li>
          </ul>
        </div>




      </nav>
    );
  }
}