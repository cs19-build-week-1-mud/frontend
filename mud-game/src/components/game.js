// Packages
import React from "react";
import axios from "axios";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      uuid: "",
      name: "",
      title: "",
      description: "",
      players: []
    };
  }

  componentDidMount() {
    const endpoint = this.props.baseUrl + "adv/init/";
    const token = "Token " + localStorage.getItem("key");

    const headers = {
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      }
    };

    axios
      .get(endpoint, headers)
      .then(res => {
        console.log(res.data);
        this.setState({
          uuid: res.data.uuid,
          name: res.data.name,
          title: res.data.title,
          description: res.data.description,
          players: res.data.players
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>The Game</h2>
        <div>
          {/* PLAYER DETAILS */}
          <h3>Player Details:</h3>
          <p>Username: {this.state.name}</p>

          {/* ROOM DETAILS */}

          <h3>Room Details:</h3>
          <p>Room Title: {this.state.title}</p>
          <p>Description: {this.state.description}</p>

          {/* PLAYERS IN THIS ROOM */}

          <h3>Players In This Room:</h3>
          {this.state.players.map(player => (
            <div key={player}>
              <p>{player}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
