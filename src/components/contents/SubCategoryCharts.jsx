import React from "react";
import * as d3 from "d3";
import Dimensions from "./utils/Dimensions";
import LineChart from "../LineChart";

const dimensionsOfLineChart = new Dimensions(270, 250, 30, 15, 60, 60);

const subMetrics = [
  "Mass Culture",
  "Culture of Daily life",
  "History",
  "Chinese Traditional Culture",
  "Regional Culture",
  "Foreign Culture",
  "Other Spectaculars and Media",
  "design",
  "literature",
  "video game",
  "Religion",
  "NA",
];

function SubCategoryCharts({
  dimensions = dimensionsOfLineChart,
  data,
  xAccessor,
}) {
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, xAccessor))
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, 0.4])
    .range([dimensions.boundedHeight, 0])
    .nice();

  return (
    <div className="chart">
      {subMetrics.map((el, i) => (
        <LineChart
          key={i}
          data={data}
          dimensions={dimensionsOfLineChart}
          xAccessor={xAccessor}
          yAccessor={(d) => d[el]}
          xScale={xScale}
          yScale={yScale}
          label={el.split(" ").join("-")}
        />
      ))}
      {console.log(data)}
    </div>
  );
}

export default SubCategoryCharts;
