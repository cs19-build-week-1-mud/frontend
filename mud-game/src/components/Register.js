// Packages
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Auth.css"

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: ""
    };
  }

  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  submit = e => {
    e.preventDefault();
    const endpoint = this.props.baseUrl + "registration/";

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("key", res.data.key);
        this.props.history.push("/game"); // make sure App exported withRouter(App)
      })
      .catch(err => {
        console.error("Registration Error", err);
      });

    this.setState({
      username: "",
      email: "",
      password1: "",
      password2: ""
    });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="dashed-line"></div>
        <div className="auth-content">
        <h1>Register</h1>
        <form onSubmit={this.submit}>
          <input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChanges}
            placeholder="username"
          />
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChanges}
            placeholder="email"
          />
          <input
            id="password1"
            type="password"
            value={this.state.password1}
            onChange={this.handleChanges}
            placeholder="password"
          />
          <input
            id="password2"
            type="password"
            value={this.state.password2}
            onChange={this.handleChanges}
            placeholder="re-type password"
          />

          {this.state.password2.length >= 8 &&
          this.state.password1 === this.state.password2 ? (
            <button onClick={this.submit}> Register </button>
          ) : (
            <p>
              Entered passwords must match and be at least <br></br> 8 characters long to
              create an account.
            </p>
          )}
        </form>
        <Link to="/login">
          <p>I already have an account</p>
        </Link>
        <Link to="/">
          <p>Back to Home</p>
        </Link>
        </div>
        
      </div>
    );
  }
}

export default Register;
