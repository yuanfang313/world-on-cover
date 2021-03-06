import React, { useState } from "react";
import Tooltip from "../hoc/Tooltip";

const Circles = ({
  data,
  keyAccessor,
  xAccessor,
  yAccessor,
  category,
  color,
  bool,
}) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [Category, setCategory] = useState(category);
  const [year, setYear] = useState("2003");
  const [val, setVal] = useState(0);

  return (
    <React.Fragment>
      <Tooltip
        headline={Category}
        time={year}
        val={`${(val * 100).toFixed(2)}%`}
        x={x}
        y={y}
      >
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
            onMouseEnter={() => {
              setX(xAccessor(d, i));
              setY(yAccessor(d, i));
              setCategory(category);
              setVal(d[category]);
              bool ? setYear(d.Year) : setYear(d.year);
            }}
          />
        ))}
      </Tooltip>
    </React.Fragment>
  );
};

Circles.defaultProps = {
  radius: 5,
};

export default Circles;
