// removed the logo because we no longer need it

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams
} from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import TodosPage from "./TodosPage";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Header</h2>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
              />  
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <SignUpPage {...routerProps} />} 
            />  
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <LoginPage {...routerProps} />} 
            /> 
            <Route 
              path="/todos" 
              exact
              render={(routerProps) => <TodosPage {...routerProps} />} 
            />              
          </Switch>
        </div>
      </Router>
    );
  }
}
