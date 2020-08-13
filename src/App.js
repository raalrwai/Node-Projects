import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import CreateDiet from "./components/create-diet.component";
import Navbar from "./components/navbar.component";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

/* import Profile from './components/Profile'; */



function App() {

  return (
    <>
   <Router>
      <div className = "container">
   <Navbar />
      <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/diet" component={CreateDiet} />
        <LoginButton/>
    <LogoutButton/>
      </div>
  
    </Router>

    </>
  );

}
export default App;
