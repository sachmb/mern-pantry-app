import React, { Component } from 'react';
import axios from 'axios';

const Meal = props => (
  <tr>
    <td>{props.meal.mealName}</td>
    <td>{props.meal.ingredients.map(i => {
      return <li key={i}> {i} </li>
    })}</td>
    <td><img className="img-fluid img-thumbnail" src={props.meal.imageURL} alt={props.meal.mealName} width="150" height="100" /></td>
  </tr>
)

export default class MealsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/meals/')
      .then(response => {
        this.setState({ meals: response.data })
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  mealsList() {
    return this.state.meals.map(i => {
      return <Meal meal={i} key={i._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Meals</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Meals</th>
              <th>Ingredients</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.mealsList()}
          </tbody>
        </table>
      </div>
    )
  }
}
