import React, { useState } from "react";

function Bars({
  data,
  category,
  subcategory,
  color,
  onClickBar,
  changeCategory,
}) {
  const [opacity, setOpacity] = useState(1);

  let startIndex, endIndex;
  let changeColor = color;

  switch (category) {
    case "culture":
      startIndex = 0;
      endIndex = 6;
      break;
    case "economy":
      startIndex = 6;
      endIndex = 12;
      break;
    case "politics":
      startIndex = 12;
      endIndex = 18;
      break;
    case "science and technology":
      startIndex = 18;
      endIndex = 24;
      break;
    case "social issue":
      startIndex = 24;
      endIndex = 30;
      break;
    case "figure":
      startIndex = 30;
      endIndex = 36;
      break;
    default:
      startIndex = 0;
      endIndex = 6;
      break;
  }

  return (
    <React.Fragment>
      {data.slice(startIndex, endIndex).map((d, i) => (
        <g key={i} className="bars">
          <rect
            className="Bars__rect"
            x={0}
            y={i * 30}
            rx="10"
            width={d.proportion * 1000}
            height={20}
            style={{ cursor: "pointer" }}
            fill={changeColor}
            fillOpacity={d.subCategory === subcategory ? opacity : 0.5}
            onClick={() => onClickBar(d.subCategory, startIndex / 6)}
            onMouseEnter={() => {
              onClickBar(d.subCategory, startIndex / 6);
            }}
          />
          <text
            className="chartLabel_bar"
            x={d.proportion * 1000 + 20}
            y={i * 30 + 15}
          >
            {`${d.subCategory}  --  ${(d.proportion * 100).toFixed(2)}%`}
          </text>
        </g>
      ))}
      {console.log(subcategory)}
    </React.Fragment>
  );
}

export default Bars;
