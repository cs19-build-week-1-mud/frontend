import React from "react";
import ParkingSpot from "./ParkingSpot";

const ParkingList = props => {
  return (
    <div className="parking-list">
      {props.rooms.map(room => {
        return <ParkingSpot rooms={props.rooms} />;
      })}
    </div>
  );
};

export default ParkingList;
