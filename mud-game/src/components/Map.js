// Packages
import React from "react";
import picture from "../images/smileyRectangle.png";
import PracticeMapJSX from "./PracticeMapJSX";
const Map = props => {
  return (
    <div className="map-container">
      {/* <img src={picture} alt="Smiley face" className="map"/> */}

      <div className="map">
        {PracticeMapJSX}
      </div>
    </div>
  );
};

export default Map;
