import React, { createContext, useContext, useState } from "react";
import Content from "./Content";

const TooltipContext = createContext();
export const useTooltipContext = () => useContext(TooltipContext);

function Tooltip({ id, children, headline, time, val, x, y }) {
  const [onHovered, setHovered] = useState(false);

  return (
    <TooltipContext.Provider
      value={id}
      headline={headline}
      time={time}
      val={val}
    >
      <g
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        {onHovered ? (
          <Content headline={headline} time={time} val={val} x={x} y={y} />
        ) : null}
      </g>
    </TooltipContext.Provider>
  );
}

export default Tooltip;
