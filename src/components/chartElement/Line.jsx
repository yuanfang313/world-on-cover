import React from "react";
import * as d3 from "d3";

const Line = ({ data, xAccessor, yAccessor, color, ...props }) => {
  const lineGenerator = d3.line().x(xAccessor).y(yAccessor);
  return (
    <React.Fragment>
      <path
        className="Line--type-line"
        stroke={color}
        d={lineGenerator(data)}
      />
    </React.Fragment>
  );
};

export default Line;
