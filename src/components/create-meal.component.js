import React, { Component } from 'react'
import axios from 'axios';

export default class CreateMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealName: '',
      ingredientsInstance: '',
      ingredients: [],
      imageURL: '',
      allIngredients: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/ingredients')
      .then(response => {
        this.setState({ allIngredients: response.data });
        this.setState({ ingredientsInstance: response.data[0].ingredient });
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  onChangemealName = e => {
    this.setState({
      mealName: e.target.value
    })
  }

  onChangeIngredients = e => {
    this.setState({
      ingredientsInstance: e.target.value,
    })
  }

  onAddItem = (e) => {
    e.preventDefault();

    this.setState(state => {
      const ingredients = state.ingredients.concat(state.ingredientsInstance);
      const allIngredients = state.allIngredients.filter(i => i.ingredient !== state.ingredientsInstance);
      console.log(ingredients);

      return {
        ...state,
        ingredients,
        allIngredients,
        ingredientsInstance: allIngredients.length !== 0 ? allIngredients[0].ingredient : '',
      };
    });
  }

  onChangeImageURL = e => {
    this.setState({
      imageURL: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const meal = {
      mealName: this.state.mealName,
      ingredients: this.state.ingredients,
      imageURL: this.state.imageURL,
    }

    console.log(meal);

    axios.post('http://localhost:5000/meals/add', meal)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.response)
      });

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create Meal</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Meal Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.mealName}
              onChange={this.onChangemealName}
            />
          </div>
          <div className="form-group">
            <label>Ingredients: {this.state.ingredients.ingredient}
              {
                this.state.ingredients.map(function (ing) {
                  return <button className="btn link" key={ing} onClick={(e) => e.preventDefault()}> {ing} </button>

                })
              }
            </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.ingredientsInstance}
              onChange={this.onChangeIngredients}>
              {
                this.state.allIngredients.map(function (user) {
                  return <option
                    key={user._id}
                    value={user.ingredient}>{user.ingredient}
                  </option>;
                })
              }
            </select>
          </div>
          <button
            className="btn btn-secondary"
            onClick={this.onAddItem}
            disabled={!this.state.ingredientsInstance}
          >
            Add ingredient to meal
          </button>
          <div className="form-group">
            <label>Image URL: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.imageURL}
              onChange={this.onChangeImageURL}
            />

          </div>
          <div className="form-group">
            <input type="submit" value="Add Meal" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
