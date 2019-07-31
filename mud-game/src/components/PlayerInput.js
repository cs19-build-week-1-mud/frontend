// Packages
import React from "react";

const PlayerInput = props => {
  return (
    <div className="player-input-container">
      <form onSubmit={props.submit} className="player-input-form">
        <input
          id="move"
          type="text"
          value={props.move}
          onChange={props.handleChanges}
          placeholder="What do you wanna do?"
        />
        <button onClick={props.submit}>Submit</button>
      </form>

      <div className="direction-buttons">
        <button id="n" onClick={props.playerMove}>
          N
        </button>
        <button id="e" onClick={props.playerMove}>
          E
        </button>
        <button id="s" onClick={props.playerMove}>
          S
        </button>
        <button id="w" onClick={props.playerMove}>
          W
        </button>
      </div>
    </div>
  );
};

export default PlayerInput;
