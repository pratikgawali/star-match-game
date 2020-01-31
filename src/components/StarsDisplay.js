import React from "react";
import mathUtils from "./../math-utils";

const StarsDisplay = props => (
  <>
    {mathUtils.range(1, props.count).map(starId => (
      <div
        key={starId}
        style={{
          display: "inline-block",
          margin: "0 15px",
          fontSize: "45px",
          padding: "5px",
          color: "#263238"
          //content: "\U+02605"
        }}
      >
        {'\u2605'}
      </div>
    ))}
  </>
);

export default StarsDisplay;
