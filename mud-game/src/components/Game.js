// Packages
import React from "react";
import axios from "axios";

// Components
import NavBar from "./NavBar";
import GameBoard from "./GameBoard";
//import Map from "./Map";
import RoomDetails from "./RoomDetails";
import PlayerInput from "./PlayerInput";
import "./Game.css";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      uuid: "",
      name: "",
      title: "",
      description: "",
      players: [],
      move: "",
      selectRoom: {
        active: false,
        number: 1
      }
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
        console.log("INIT: ", res.data);
        this.setState({
          uuid: res.data.uuid,
          name: res.data.name,
          title: res.data.title,
          description: res.data.description,
          players: res.data.players
        });
        // localStorage.setItem("title", res.data.title);
      })
      .catch(err => {
        console.log(err);
      });
  }

  gamePlay = () => {
    if (this.state.move === "e" && this.state.selectRoom.number < 24) {
      this.setState({
        selectRoom: { number: this.state.selectRoom.number + 1, active: true }
      });
      console.log(this.state.selectRoom);
    } else {
      console.log("STTTTOP!! You're gonna hit the curb!");
    }
    if (this.state.move === "s" && this.state.selectRoom.number < 17) {
      this.setState({
        selectRoom: { number: this.state.selectRoom.number + 6, active: true }
      });
      console.log(this.state.selectRoom);
    } else {
      console.log("STTTTOP!! You're gonna hit the curb!");
    }
    if (this.state.move === "n" && this.state.selectRoom.number > 6) {
      this.setState({
        selectRoom: { number: this.state.selectRoom.number - 6, active: true }
      });
      console.log(this.state.selectRoom);
    } else {
      console.log("STTTTOP!! You're gonna hit the curb!");
    }
    if (this.state.move === "w" && this.state.selectRoom.number > 1) {
      this.setState({
        selectRoom: { number: this.state.selectRoom.number - 1, active: true }
      });
      console.log(this.state.selectRoom);
    } else {
      console.log("STTTTOP!! You're gonna hit the curb!");
    }
  };

  // gamePlaySouth = () => {
  //   if (this.state.move === "s" && this.state.selectRoom.number < 7) {
  //     this.setState({
  //       selectRoom: { number: this.state.selectRoom.number + 6, active: true }
  //     });
  //     console.log(this.state.selectRoom);
  //   } else {
  //     console.log("STTTTOP!! You're gonna hit the curb!");
  //   }
  // };

  // gamePlayNorth = () => {
  //   if (this.state.move === "n" && this.state.selectRoom.number > 6) {
  //     this.setState({
  //       selectRoom: { number: this.state.selectRoom.number - 6, active: true }
  //     });
  //     console.log(this.state.selectRoom);
  //   } else {
  //     console.log("STTTTOP!! You're gonna hit the curb!");
  //   }
  // };

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
      this.gamePlay();
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
    console.log(this.state.move);
    console.log(this.state.selectRoom);
    return (
      <div className="game-container">
        <NavBar name={this.state.name} />

        <div className="center-section">
          {/* <Map baseUrl={this.props.baseUrl} /> */}
          <GameBoard
            baseUrl={this.props.baseUrl}
            move={this.state.move}
            playerMove={this.playerMove}
          />
          <RoomDetails
            roomNum={this.state.roomNum}
            title={this.state.title}
            description={this.state.description}
            players={this.state.players}
          />
        </div>

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
