import React from "react";

const colors = {
  available: "#eee",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue"
};

const PlayButton = props => (
  <button
    style={{
      backgroundColor: colors[props.status],
      border: "thin solid #ddd",
      width: "45px",
      height: "45px",
      margin: "10px",
      fontSize: "25px"
    }}
    onClick={() => props.onClick(props.value, props.status)}
  >
    {props.value}
  </button>
);

export default PlayButton;