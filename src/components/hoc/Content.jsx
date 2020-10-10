import React from "react";

function Content({ headline, time, val, x, y, ...props }) {
  const tooltipHeight = 50;
  //const width = 100;

  let width = Math.max(headline.length, time.toString().length + 6) * 6.5 + 35;

  return (
    <React.Fragment>
      <g className="tooltipContainer" transform={`translate(${x}, ${y - 10})`}>
        <rect
          className="tooltip_rect"
          x={-Math.max(width, 110) / 2}
          y={-tooltipHeight - 10}
          rx="10"
          width={Math.max(width, 110)}
          height={tooltipHeight}
          color="grey"
        />
        <rect
          className="tooltip_rect-pointer"
          x={-30}
          y={-30}
          width={30}
          height={30}
          color="grey"
        />
      </g>
      <g className="tooltipContent">
        <text
          className="tooltipLabel"
          transform={`translate(${x - Math.max(width, 110) / 2 + 10}, ${
            y - 50
          })`}
        >
          {headline}
        </text>
        <text
          className="tooltipLabel"
          transform={`translate(${x - Math.max(width, 110) / 2 + 10}, ${
            y - 30
          })`}
        >
          {`${time}: ${val}`}
        </text>
      </g>
      {console.log(headline.length)}
      {console.log(time.toString().length)}
      {console.log(width)}
    </React.Fragment>
  );
}

export default Content;
