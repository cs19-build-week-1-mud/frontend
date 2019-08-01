// Packages
import React from "react";
import axios from "axios";

// Components
import picture from "../images/smileyRectangle.png";
import PracticeMapJSX from "./PracticeMapJSX";
//import MapAlgo from "./MapAlgo";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: []
    };
  }

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
    return (
      <div className="map-container">

        {/* <MapAlgo rooms={this.state.rooms} /> */}

        {/* <img src={picture} alt="Smiley face" className="map"/> */}

        <div className="map">
          {PracticeMapJSX}
        </div>
        
      </div>
    );
  }
}

export default Map;
