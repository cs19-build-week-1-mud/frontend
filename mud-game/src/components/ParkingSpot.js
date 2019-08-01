import React from "react";

const ParkingSpot = props => {
  return (
    <div className="parking-spot fas fa-car fa-5x">
      <h3>{props.rooms.title}</h3>
    </div>
  );
};

export default ParkingSpot;
