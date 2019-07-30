// Packages
import React from "react";
import axios from "axios";

// Components
import NavBar from "./NavBar";
import PlayerInput from "./PlayerInput";

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


  // ===========  Player Text Input
  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  submit = e => {
    e.preventDefault();
    this.postDirection();
    this.setState({ move: "" });
  };

  // ===========  Player Navigation Buttons
  playerMove = e => {
    e.preventDefault();

    // get button's id
    const { id } = e.target;

    // set this.state.move to button id THEN invoke post request
    this.setState({ move: id }, () => {
      this.postDirection();
    });

    console.log("Move on state: ", this.state.move);
  };

  // ===========  POST Request For Player Move + Req Configuration
  // create direction var that sets direction arg to this.state.move
  // create token var, authorization, and content-type header arg
  // POST request passing in endpoint, direction, and headers


  /*
  may have to make axios call to specific endpoint conditional based on if 
  player entered a direction command or a different type of command:
  (if n/e/s/w, post to /move endpoint, otherwise, post to /say endpoint) 
  */

  postDirection = () => {

    const direction = {
      direction: this.state.move
      //direction: id // this way updates automatically
    };

    const token = "Token " + localStorage.getItem("key");
    const headers = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    };

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
          players: res.data.players,
          move: ""
        });
      })
      .catch(err => {
        console.log("Whoops! ", err);
      });
  };

  render() {
    return (
      <div>
        <NavBar 
        name={this.state.name}
        logout={this.logout}/>

        <h2>The Game</h2>

        {/* ROOM DETAILS */}

        <h3>Room Details:</h3>
        <p>Room Title: {this.state.title}</p>
        <p>Description: {this.state.description}</p>

        {/* PLAYERS IN THIS ROOM */}

        <h3>Players ({this.state.players.length}):</h3>
        {this.state.players.map(player => (
          <div key={player}>
            <p>{player}</p>
          </div>
        ))}

        {/* PLAYER DETAILS + INPUT */}
        <h3>Player Details:</h3>
        <p>Username: {this.state.name}</p>
        <p>You Entered: {this.state.move}</p>

        {/* <div className="direction-buttons">
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

        <form onSubmit={this.submit}>
          <input
            id="move"
            type="text"
            value={this.state.move}
            onChange={this.handleChanges}
            placeholder="what do you wanna do"
          />
        </form> */}

        <PlayerInput 
          playerMove={this.playerMove}
          submit={this.submit}
          move={this.state.move}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default Game;
