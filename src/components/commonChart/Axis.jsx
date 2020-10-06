import React from "react";
import * as d3 from "d3";
import { useChartDimensions } from "../Chart";

const Axis = ({ dimension, scale, label, ...props }) => {
  const dimensions = useChartDimensions();
  const axisGeneratorsByDimension = {
    x: "axisBottom",
    y: "axisLeft",
  };

  const axisGenerator = d3[axisGeneratorsByDimension[dimension]]().scale(scale);
  const id = dimension === "x" ? "xAxis" : "yAxis";
  const ID = `${label}_${id}`;
  d3.select(`#${ID}`).call(axisGenerator);

  return (
    <React.Fragment>
      <g
        {...props}
        id={ID}
        transform={
          dimension === "x" ? `translate(0, ${dimensions.boundedHeight})` : null
        }
      >
        <text
          className="chartLabel"
          x={`${dimensions.boundedWidth / 2}`}
          y={`${dimensions.marginBottom - 15}`}
          fill="black"
        >
          {dimension === "x" ? label.split("-").join(" ") : null}
        </text>
      </g>
    </React.Fragment>
  );
};

export default Axis;
