// Packages
import React from "react";

class RoomDetails extends React.Component {
  state = {
    username: ""
  };

  // centerText = {
  //   textAlign: 'center',
  // };
  // use: style={this.centerText}

  showName = (e, name) => {
    e.preventDefault();
    this.setState({ username: name });
  };

  clearName = e => {
    this.setState({ username: "" });
  };

  render() {
    return (
      <div className="room-details-container">
        <h3>Room Details:</h3>
        <p><strong>Room #{this.props.roomNum}</strong></p>
        <p>
          <strong>Title:</strong> {this.props.title}
        </p>
        <p>
          <strong>Description:</strong> {this.props.description}
        </p>

        <h3>Players In This Room ({this.props.players.length}):</h3>

        <div className="players-container">
          {this.props.players.map(player => (
            <div key={player}>
              {/* <p>{player}</p> */}
              <i
                className="fas fa-male person"
                onMouseOver={e => this.showName(e, player)}
                onMouseLeave={this.clearName}
              />
            </div>
          ))}
        </div>
        
        {this.state.username !== "" ? (
          <p>Player: {this.state.username}</p>
        ) : null}
      </div>
    );
  }
}

export default RoomDetails;
