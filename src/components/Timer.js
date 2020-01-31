import React from "react";

const style = {
  color: "#666",
  marginTop: "15px",
  marginLeft: "3px"
};

const Timer = props => {
  return <div style={style}>Time Remaining: {props.timeRemaining}</div>;
};

export default Timer;