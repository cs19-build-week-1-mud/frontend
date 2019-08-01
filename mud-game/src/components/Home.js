// Packages
import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = props => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>The Parking Lot</h1>
        <p>
          We've all experienced the daunting task of finding a decent parking space, or better yet, beating the car on the other side of the lot to that space! The selection of good spaces is usually down-sized by many factors such as spaces occupied with trash, shopping carts, people, and we can't forget that one car that's so small you didn't even know it was there!
        </p>

        <p>
          In this Parking Lot Multi-User Dungeon Game, you'll have the task of navigating through the parking lot to find your perfect parking space. You'll run into situations where the space isn't ideal and you'll have to keep looking until you find one that is! Don't forget, there are other drivers looking around as well, so move quickly!
        </p>
      </div>
      <div className="home-enter">
        <h3>Register or Login To Play</h3>
        <div className="home-buttons">
          <Link to="/register">
            <button>Register</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
