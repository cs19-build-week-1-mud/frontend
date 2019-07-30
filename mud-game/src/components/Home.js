// Packages
import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Read this cool information about this ever-so-cool game.</p>

      <h2>Register or Login To Enter</h2>
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
