import React, { Component } from "react";
import axios from "axios";
import "./app.css";
/* import { Button} from 'react-bootstrap'; */

export default class CreateDiet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxCalories: "",
      diets: [{ name: "", portionNumber: 0, calorieAmount: 0 }]
    };
  }
  addDiet(e) {
    this.setState(prevState => ({
      diets: [
        ...prevState.diets,
        { name: "", portionNumber: 0, calorieAmount: 0 }
      ]
    }));
  }
  validateDiet(e) {
    let { diets, maxCalories } = this.state;
    /* let diets = this.state.diets; */
    var x = 0;
    diets.forEach(element => {
      x += parseInt(element.calorieAmount, 10);
      console.log(element.calorieAmount, x);
    });
    if (x > maxCalories){
      alert("You Have exceeded your weekly Calorie Limit");
    }
  
  }
  setCalorieAmount = e => {
    this.setState({maxCalories: e.target.value})
  };
  handleChange = e => {
    if (["name", "calorieAmount"].includes(e.target.className)) {
      let diets = [...this.state.diets];
      diets[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ diets }, () => console.log(this.state.diets));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
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

  handleSubmit = e => {
    e.preventDefault();
    /* this.setState */
  };
  render() {
    let { diets, maxCalories } = this.state;
    return (
      <div>
        <h3>Create a Diet Plan</h3>
        <div class="boxed">Enter Max Calorie Amount</div>
        <input type="text" name="maxCalories" id="maxCalories" value={maxCalories} onChange={this.setCalorieAmount}  />

        <button onClick={() => this.addDiet()}>CLICK ME TO ADD AN INPUT</button>
        <button onClick={() => this.validateDiet()}>
          Check Calories total
        </button>
        <form
          name="registration_form"
          id="registration_form" /* class="form-inline" */
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          {diets.map((val, idx) => {
            let dietId = `diets-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={dietId}>{`Diet #${idx + 1}`}</label>
                <input
                  type="text"
                  name={dietId}
                  data-id={idx}
                  id={dietId}
                  value={diets[idx].foodName}
                  className="name"
                />
                <label htmlFor={dietId}># of Calories</label>
                <input
                  type="number"
                  name={dietId}
                  data-id={idx}
                  id={dietId}
                  value={diets[idx].caloriesAmount}
                  className="calorieAmount"
                />
              </div>
            );
          })}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
