import React, { Component } from 'react';
import axios from 'axios';

export default class CreateIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredient: '',
      ingredients: [],
      // switch: 'visibility:hidden',
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

  onChangeIngredient = e => {
    this.setState({
      ingredient: e.target.value
    })
  }


  onSubmit = e => {
    e.preventDefault()
    const ingre = {
      ingredient: this.state.ingredient,
    }

    console.log(ingre);

    this.state.ingredients.includes(this.state.ingredient) ? alert('already exist') : axios.post('http://localhost:5000/ingredients/add', ingre)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.response)
      });


    this.setState({
      ingredient: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add Ingredients</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Ingredient: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.ingredient}
              onChange={this.onChangeIngredient}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Ingredient" className="btn btn-primary" />
          </div>
        </form>
        {/* <div style={this.state.switch}>{this.state.ingredient} Already Exist on Database</div> */}
      </div >
      
    )
  }
}