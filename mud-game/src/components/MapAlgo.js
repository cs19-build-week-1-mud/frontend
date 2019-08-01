// NOT USING
import React from "react";

const MapAlgo = props => {
  return (
    <div>
      {props.rooms.map(room => (
        
        
        <div
          style={{
            position: "absolute",
            display: "block",
            width: "50px",
            height: "90px",
            backgroundColor: "orange",
            fontSize: "16px",
            color: "black",
            textAlign: "center",
            left: `${room.pk * 60}px`,
            top: "100px"
          }}
          key={room.pk}
        >
        {console.log(room.fields)}
          {room.pk}
          {/* {room.fields.title} */}
        </div>
      ))}
    </div>
  );
};

export default MapAlgo;
