// Packages
import React from "react";
import picture from "../images/smileyRectangle.png";

const Map = props => {
  return (
    <div className="map-container">
      <img src={picture} alt="Smiley face" className="map"/>
    </div>
  );
};

export default Map;
