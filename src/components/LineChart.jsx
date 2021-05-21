import React from "react";
import * as d3 from "d3";

import Chart from "./Chart";
import RectBackground from "./chartElement/RectBackground";
import Axis from "./chartElement/Axis";
import Grids from "./chartElement/Grids";
import Line from "./chartElement/Line";
import Circle from "./chartElement/Circle";

function LineChart({
  data,
  dimensions,
  xAccessor,
  yAccessor,
  index,
  category,
  subcategory,
  color,
  bool,
  ...props
}) {
  let yMax = bool ? 0.6 : 0.4;

  const xScale_1 = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);

  const xScale_2 = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([dimensions.boundedWidth * 0.10, dimensions.boundedWidth * 0.90]);
  
    const yScale = d3
    .scaleLinear()
    .domain([0, yMax])
    .range([dimensions.boundedHeight, 0])
    .nice();

  let xScale = bool ? xScale_2 : xScale_1;
  const xAccessorScaled = (d) => xScale(xAccessor(d));
  const yAccessorScaled = (d) => yScale(yAccessor(d));
  const keyAccessor = (d, i) => i;

  const label = category.split(" ").join("_");

  return (
    <div className="lineChart">
      <Chart dimensions={dimensions}>
        <RectBackground />
        <Axis dimension="x" scale={xScale_1} label={label} bool={bool} />
        <Axis dimension="y" scale={yScale} label={label} />
        <Grids dimension="x" scale={xScale_1} label={label} />
        <Grids dimension="y" scale={yScale} label={label} />

        <Line
          {...props}
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          color={color}
        />
        <Circle
          {...props}
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          subcategory={subcategory}
          category={category}
          bool={bool}
          color={color}
        />
      </Chart>
    </div>
  );
}

export default LineChart;
