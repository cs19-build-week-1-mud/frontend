import React from "react";
import axios from "axios";
import ParkingList from "./ParkingList";

class GameBoard extends React.Component {
  state = {
    rooms: []
  };

  componentDidMount() {
    const endpoint = this.props.baseUrl + "adv/rooms/";
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
        this.setState(
          {
            rooms: JSON.parse(res.data.rooms)
          },
          () => {
            console.log("Rooms on State: ", this.state.rooms);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props);
    console.log("gameboard state:", this.state);
    return (
      <div className="gameboard-container">
        <ParkingList
          rooms={this.state.rooms}
          playerMove={this.props.playerMove}
        />
      </div>
    );
  }
}

export default GameBoard;
