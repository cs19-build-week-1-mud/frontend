// Packages
import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password1: "",
            password2: ""
        }
    }

    handleChanges = e => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    };

    submit = e => {
        e.preventDefault();
        const endpoint = this.props.baseUrl + "registration/"

        axios
        .post(endpoint, this.state)
        .then(res => {
          localStorage.setItem("key", res.data.key);
          this.props.history.push("/game"); // make sure App exported withRouter(App)
        })
        .catch(err => {
          console.error("Sign In Error", err);
        });

    }


    render() {
        return (
            <div>
                <h2>Register</h2>
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

                    {this.state.password2.length && this.state.password1 === this.state.password2 ? <button onClick={this.submit}> Register </button> : <p>Passwords must match to create an account.</p>}
                </form>
                <Link to="/login"><p>I already have an account</p></Link>
            </div>
        )
    }

}

export default Register