import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import CreateDiet from "./components/create-diet.component";
import Example from "./components/example.component";
import Navbar from "./components/navbar.component";


function App() {
  return (
    <Router>
      <div className = "container">
   <Navbar />
      <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/diet" component={CreateDiet} />
        <Route path="/example" component={Example} />
      </div>
    </Router>
  );
}
export default App;
