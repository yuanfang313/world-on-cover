import React from "react";
import * as d3 from "d3";
import { useChartDimensions } from "../Chart";

function Grids({ dimension, scale, label, ...props }) {
  const dimensions = useChartDimensions();

  const gridsGeneratorsByDimension = {
    x: "axisBottom",
    y: "axisLeft",
  };
  let boundedArea = {
    y: dimensions.boundedWidth,
    x: dimensions.boundedHeight,
  };
  const gridsGenerator = d3[gridsGeneratorsByDimension[dimension]]()
    .scale(scale)
    .tickSize(0 - boundedArea[dimension])
    .tickFormat("");

  const id = dimension === "x" ? "xGrids" : "yGrids";
  const ID = `${label}_${id}`;
  d3.select(`#${ID}`).call(gridsGenerator);

  return (
    <g
      {...props}
      id={ID}
      className="grid"
      transform={
        dimension === "x" ? `translate(0, ${dimensions.boundedHeight})` : null
      }
    ></g>
  );
}

export default Grids;
