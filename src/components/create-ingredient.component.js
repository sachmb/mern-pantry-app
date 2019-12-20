import React, { Component } from 'react';
import axios from 'axios';
import Error from '../elements/Error'

export default class CreateIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredient: '',
      ingredients: [],
      error: false,
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
    e.preventDefault();
    const ingre = {
      ingredient: this.state.ingredient,
    }

    console.log(ingre);

    this.state.ingredients.includes(this.state.ingredient) ? this.setState({ error: true }) : (axios.post('http://localhost:5000/ingredients/add', ingre)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error.response)
      }));


    this.setState({
      ingredient: ''
    })
  }

  handleOnBlur = async e => {
    this.setState({
      ingredient: e.target.value
    });
    const data = {
      ingredient: this.state.ingredient
    };
    const checkIngredient = await axios.post('http://localhost:5000/ingredients/check', data)
      .then(exist => exist.status)
      .catch(error => {
        console.log(error.response)
      })

    checkIngredient === 204
      ? this.setState({ error: true })
      : this.setState({ error: false });

  }


  render() {
    return (
      <div className="row  justify-content-center">
        <div className="col-xs-12 col-lg-12">
          <h3>Add Ingredients</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Ingredient: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.ingredient}
                onChange={this.onChangeIngredient}
                onBlur={this.handleOnBlur}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Add Ingredient" className="btn btn-primary" disabled={this.state.error} />
            </div>
          </form>
          {/* <div style={this.state.switch}>{this.state.ingredient} Already Exist on Database</div> */}
          {this.state.error && <Error message="Ingredient exist in database" />}
        </div >
      </div>
    )
  }
}