// Packages
import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

// Components + CSS
import Register from "./components/register";
import Login from "./components/login";
import Game from "./components/game";

import "./App.css";

class App extends React.Component {
  state = {
    baseUrl: "https://lambda-mud-test.herokuapp.com/api/"
  };

  logout = e => {
    localStorage.clear();
  };

  render() {
    return (
      <div className="App">
        {localStorage.getItem("key") ? (
          <Link to="/">
            <button onClick={this.logout}>Logout</button>
          </Link>
        ) : (
          <div>
            <h1>Register or Login To Enter</h1>
            <Link to="/register">
              {" "}
              <button>Register</button>
            </Link>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}

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
