import React from "react";

function Bars({ data, dimensions, category, onClickBar }) {
  let startIndex, endIndex;

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
            x={0}
            y={i * 30}
            width={d.proportion * 1000}
            height={20}
            fill="#9980FA"
            onClick={() => onClickBar(d.subCategory, startIndex / 6)}
          />
          <text x={d.proportion * 1000 + 20} y={i * 30 + 15}>
            {`${d.subCategory}  --  ${(d.proportion * 100).toFixed(2)}%`}
          </text>
        </g>
      ))}
    </React.Fragment>
  );
}

export default Bars;
