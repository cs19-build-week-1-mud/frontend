// Packages
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  submit = e => {
    e.preventDefault();
    const endpoint = this.props.baseUrl + "login/";

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("key", res.data.key);
        this.props.history.push("/game"); // make sure App exported withRouter(App)
      })
      .catch(err => {
        console.error("Login Error", err);
      });

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.submit}>
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChanges}
            placeholder="username"
          />
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChanges}
            placeholder="password"
          />

          {this.state.username && this.state.password ? (
            <button onClick={this.submit}> Login </button>
          ) : null}
        </form>
        
        <Link to="/register">
          <p>I don't have an account yet</p>
        </Link>
        <Link to="/">
          <p>Back to Home</p>
        </Link>
      </div>
    );
  }
}

export default Login;
