import React, { Component } from 'react';
import axios from 'axios';
import CreateIngredient from './create-ingredient.component';

const Ingredient = props => (
  <tr>
    <td>{props.ingredient.ingredient}</td>
  </tr>
)

export default class IngredientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/ingredients')
      .then(response => {
        this.setState({ ingredients: response.data })
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  ingredientList() {
    return this.state.ingredients.map(i => {
      return <Ingredient ingredient={i} key={i._id} />;
    })
  }

  render() {
    return (
        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-4">
            <CreateIngredient />
          </div>
          <div className="col-xs-12 col-md-8 col-lg-8">
            <h3>Ingredients</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Ingredients</th>
                </tr>
              </thead>
              <tbody>
                {this.ingredientList()}
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}