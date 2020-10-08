import React from "react";

const Circles = ({
  data,
  keyAccessor,
  xAccessor,
  yAccessor,
  index,
  color,
  bool,
}) => {
  let changingData = data.slice(index * 4, index * 4 + 4);
  if (bool) {
    data = changingData;
  }

  return (
    <React.Fragment>
      {data.map((d, i) => (
        <circle
          className="Circles__circle"
          key={keyAccessor(d, i)}
          cx={xAccessor(d, i)}
          cy={yAccessor(d, i)}
          r="3"
          fill={color}
          stroke={color}
          style={{ cursor: "pointer" }}
        />
      ))}
    </React.Fragment>
  );
};

Circles.defaultProps = {
  radius: 5,
};

export default Circles;
