// Packages
import React from "react";
import { Route, withRouter } from "react-router-dom";

// Components + CSS
import Welcome from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Game from "./components/Game";

import "./App.css";

class App extends React.Component {
  state = {
    baseUrl: "https://lambda-mud-test.herokuapp.com/api/"
  };


  render() {
    return (
      <div className="App">
        <Route 
          exact path="/" 
          render={props => <Welcome {...props} />} 
        />
        <Route
          path="/register"
          render={props => <Register {...props} baseUrl={this.state.baseUrl} />}
        />
        <Route
          path="/login"
          render={props => <Login {...props} baseUrl={this.state.baseUrl} />}
        />
        <Route
          path="/game"
          render={props => <Game {...props} baseUrl={this.state.baseUrl} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
