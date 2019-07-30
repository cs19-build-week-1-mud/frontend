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
      players: [],
      move: ""
    };
  }

  componentDidMount() {
    const endpoint = this.props.baseUrl + "adv/init/";
    const token = "Token " + localStorage.getItem("key");

    const headers = {
      headers: {
        Authorization: token,
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

  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  playerMove = e => {
    e.preventDefault();

    // get button's id
    const { id } = e.target;

    // set this.state.move to button id
    this.setState({ move: id });

    console.log("Move on state: ", this.state.move.toString());

    // create direction var that sets direction arg to this.state.move
    const direction = {
      direction: this.state.move
      //   direction: id // this way updates automatically
    };

    // create token var, authorization, and content-type header arg
    const token = "Token " + localStorage.getItem("key");
    const headers = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    };

    // axios call
    const endpoint = this.props.baseUrl + "adv/move/";
    axios
      .post(endpoint, direction, headers)
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
        console.log("Whoops! ", err);
      });
  };

  render() {
    return (
      <div>
        <h2>The Game</h2>
        <div>
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

          {/* PLAYER DETAILS */}
          <h3>Player Details:</h3>
          <p>Username: {this.state.name}</p>
          <p>You Entered: {this.state.move}</p>

          <div className="direction-buttons">
            <button id="n" onClick={this.playerMove}>
              N
            </button>
            <button id="e" onClick={this.playerMove}>
              E
            </button>
            <button id="s" onClick={this.playerMove}>
              S
            </button>
            <button id="w" onClick={this.playerMove}>
              W
            </button>
          </div>

          <input
            id="move"
            type="text"
            value={this.state.move}
            onChange={this.handleChanges}
            placeholder="what do you wanna do"
          />
        </div>
      </div>
    );
  }
}

export default Game;
