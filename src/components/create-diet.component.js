import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
export default class CreateDiet extends Component {
  constructor(props) {
    super(props);

    this.onChangeFoodName = this.onChangeFoodName.bind(this);
    this.onChangePortions = this.onChangePortions.bind(this);  
    this.onChangeCalories = this.onChangeCalories.bind(this);  

    this.state = {
      foodName: '',
      portions: 0,
      calories: 0,
      users: []
  }
}

onChangeFoodName(e) {
  this.setState({
      foodName: e.target.value      //target = text box, value equals value in text bos
  })
}

onChangePortions(e) {
  this.setState({
      portions: e.target.value
  })
}

onChangeCalories(e) {
  this.setState({
      calories: e.target.value
  })
}
onSubmit(e) {
  e.preventDefault();    //prevent standard submit behavior

  const diet = {
      foodName: this.state.foodName,
      portions: this.state.portions,
      calories: this.state.calories,
      
  }
  axios.post('http://localhost:5000/diet/add', diet)
        .then(res => console.log(res.data));
  

        window.location = '/';
}
    render() {
        return (
          <div>
            <h3>Create a Diet Plan</h3>
          
          <div className="form-group"> 
          <label>Food Item: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.foodName}
              onChange={this.onChangeFoodName}
              />
          </div>
          <div className="form-group"> 
          <label>Food Item: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.foodName}
              onChange={this.onChangeFoodName}
              />
          </div>
        </div>
        )
    }
}