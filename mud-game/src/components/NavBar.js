// Packages
import React from "react";
import { Link } from "react-router-dom";


const NavBar = props => {

  const logout = e => {
    localStorage.clear();
  };

  return (
    <nav className="navbar-container">
      <p className="current-user">Welcome, {props.name}!</p>
      <p>Red Jaguars Lambda MUD</p>

      <Link to="/">
        <button onClick={logout}>Logout</button>
      </Link>
    </nav>
  );
};

export default NavBar;
