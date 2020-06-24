import React, { Component } from "react";
import axios from "axios";
import "./app.css";
import { Button} from 'react-bootstrap';

export default class CreateDiet extends Component {
  constructor(props) {
    super(props);

  

    this.state = {
      foodName: "",
      portions: 0,
      calories: 0,
      diets: [{name:"", portionNumber:0, calorieAmount: 0,}],
    };
  }
  addDiet(e){
    this.setState((prevState) => ({
      diets: [...prevState.diets, {name:"", portionNumber: 0, calorieAmount: 0}],
    }));
  } 
  onSubmit(e) {
    e.preventDefault(); //prevent standard submit behavior
    
 
    const diet = {
      foodName: this.state.foodName,
      portions: this.state.portions,
      calories: this.state.calories
    };
    axios
      .post("http://localhost:5000/diet/add", diet)
      .then(res => console.log(res.data));

    window.location = "/";
  }
  handleSubmit = (e) => { e.preventDefault() }
  render() {
    let {diets} = this.state
    return (
      <div>
        <h3>Create a Diet Plan</h3>
        <form name="registration_form" id='registration_form' class="form-inline" onSubmit={this.handleSubmit}>
        <button onClick={ () => this.addDiet() }>
                   CLICK ME TO ADD AN INPUT
               </button>
        {/* { <div className="form-group">
          <label>Food Item: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.foodName}
            onChange={this.onChangeFoodName}
          />
        </div>
        <div className="form-group">
          <label>Portions: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.portions}
            onChange={this.onChangePortions}
          />
        </div>
        <div className="form-group">
          <label>Calories: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.calories}
            onChange={this.onChangeCalories}
          />
        </div> } */}
        {
        diets.map((val, idx)=> {
            let dietId = `diets-${idx}`, portionNumberId = `portionNumber-${idx}`, calorieAmountId = `calorieAmount-${idx}`
            return (

              <div key={idx}>
                <label htmlFor={dietId}>{`Diet #${idx + 1}`}</label>
                <input
                  type="text"
                  name={dietId}
                  data-id={idx}
                  id={dietId}
                  value={diets[idx].name} 
                  className="name"
                />
                <label htmlFor={dietId}>Age</label>
                <input
                  type="text"
                  name={dietId}
                  data-id={idx}
                  id={dietId}
                  value={diets[idx].age} 
                  className="age"
                />
              </div>
            )
          })
        }     
       </form>
      </div>
    );
  }
}
