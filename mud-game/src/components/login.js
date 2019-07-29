// Packages
import React from 'react'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form>
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

                    {this.state.username && this.state.password ? <button> Login </button> : null}
                </form>
            </div>
        )
    }

}

export default Login