import React from "react";
import * as d3 from "d3";

const Line = ({ data, xAccessor, yAccessor, index, bool, ...props }) => {
  const lineGenerator = d3.line().x(xAccessor).y(yAccessor);
  let changingData = data.slice(index * 4, index * 4 + 4);

  return (
    <React.Fragment>
      {!bool ? (
        <path className="Line--type-line" d={lineGenerator(data)} />
      ) : (
        <path className="Line--type-line" d={lineGenerator(changingData)} />
      )}
    </React.Fragment>
  );
};

export default Line;
