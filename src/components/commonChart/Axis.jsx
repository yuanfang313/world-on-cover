import React from "react";
import * as d3 from "d3";
import { useChartDimensions } from "../Chart";

const Axis = ({ dimension, scale, label, bool, ...props }) => {
  const dimensions = useChartDimensions();
  const axisGeneratorsByDimension = {
    x: "axisBottom",
    y: "axisLeft",
  };
  const formatter = d3.format(".0%");
  const axisGenerator =
    dimension === "x"
      ? d3[axisGeneratorsByDimension[dimension]]().scale(scale)
      : d3[axisGeneratorsByDimension[dimension]]()
          .scale(scale)
          .tickFormat(formatter);

  const id = dimension === "x" ? "xAxis" : "yAxis";
  const ID = `${label}_${id}`;
  d3.select(`#${ID}`).call(axisGenerator);
  console.log(label);
  return (
    <React.Fragment>
      <g
        {...props}
        id={ID}
        className="axis"
        transform={
          dimension === "x"
            ? `translate(0, ${dimensions.boundedHeight + 10})`
            : `translate(-10, 0)`
        }
      >
        <text
          className="chartLabel"
          x={`${dimensions.boundedWidth / 2}`}
          y={
            bool
              ? `${-dimensions.boundedHeight - 35}`
              : `${dimensions.marginBottom - 20}`
          }
          fill="black"
        >
          {dimension === "x" ? label.split("_").join(" ") : null}
        </text>
      </g>
    </React.Fragment>
  );
};

export default Axis;
