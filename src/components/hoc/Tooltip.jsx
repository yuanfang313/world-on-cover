import React, { useState } from "react";
import Content from "./Content";

function Tooltip({ id, children, headline, time, val, x, y }) {
  const [onHovered, setHovered] = useState(false);

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {onHovered ? (
        <Content headline={headline} time={time} val={val} x={x} y={y} />
      ) : null}
    </g>
  );
}

export default Tooltip;
