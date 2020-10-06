import React from "react";
import * as d3 from "d3";

const Line = ({ data, xAccessor, yAccessor, ...props }) => {
  const lineGenerator = d3.line().x(xAccessor).y(yAccessor);

  return (
    <path {...props} className="Line--type-line" d={lineGenerator(data)} />
  );
};

export default Line;
