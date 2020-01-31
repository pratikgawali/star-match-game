import React from "react";

const style = {
  fontSize: "250%",
  fontWeight: "bold",
  margin: "15px"
};

const PlayAgain = props => (
  <div style={style}>
    <div style={{
        fontSize: "150%",
        fontWeight: "bold",
        margin: "15px",
        color: props.gameStatus === "lost" ? "red" : "green" }}>
      {props.gameStatus === "lost" ? "Game Over" : "You Won"}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

export default PlayAgain;
