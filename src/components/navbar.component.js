import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: "about",
      navItem: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    
    console.log("working", e.target.id);
    
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          ExcerTracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li id="exercises"className="navbar-item"onClick={this.handleClick.bind(this.id)}>>
              <Link to="/" className="nav-link"/* onClick={this.handleClick} */>
                Exercises
              </Link>
            </li>
            <li id="create"className="navbar-item">
              <Link to="/create" className="nav-link" onClick={this.handleClick}> 
                Create Exercise Log
              </Link>
            </li>
            <li id="user"className="navbar-item">
              <Link to="/user" className="nav-link" onClick={this.handleClick}> 
                Create User
              </Link>
            </li>
            <li id="diet"className="navbar-item">
              <Link to="/diet" className="nav-link"onClick={this.handleClick}>
                Create Diet
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
