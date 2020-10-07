import React from "react";
import * as d3 from "d3";
import LineChart from "../../LineChart";
import Dimensions from "../utils/Dimensions";

const dimensionsOfLineChart = new Dimensions(270, 270, 30, 15, 60, 60);

function MainCategoryCharts({
  dimensions = dimensionsOfLineChart,
  metrics,
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
      {metrics.map((el, i) => (
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
      {/* {console.log(data)} */}
    </div>
  );
}

export default MainCategoryCharts;
