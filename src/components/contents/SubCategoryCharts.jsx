import React from "react";
import * as d3 from "d3";
import Dimensions from "./utils/Dimensions";
import LineChart from "../LineChart";
import BarChart from "../BarChart";

const dimensionsOfLineChart = new Dimensions(270, 250, 30, 15, 60, 0);
const dimensionOfBarChart = new Dimensions(380, 250, 30, 15, 60, 50);

function SubCategoryCharts({
  data2,
  data3,
  xAccessor,
  yAccessor,
  category,
  subcategory,
  index,
  onClickBar,
  ...props
}) {
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data2, xAccessor))
    .range([0, dimensionsOfLineChart.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, 0.6])
    .range([dimensionsOfLineChart.boundedHeight, 0])
    .nice();

  return (
    <div className="subChartContainer">
      <LineChart
        data={data2}
        dimensions={dimensionsOfLineChart}
        xAccessor={xAccessor}
        yAccessor={(d) => d[subcategory]}
        xScale={xScale}
        yScale={yScale}
        label={subcategory.split(" ").join("-")}
        category={category}
        index={index}
        bool={true}
      />
      {/* {console.log("data2", data2[0])} */}
      {console.log("index", index)}
      {console.log("subcategory", subcategory)}
      <BarChart
        data={data3}
        dimensions={dimensionOfBarChart}
        category={category}
        onClickBar={onClickBar}
      />

      {/* {subMetrics.map((el, i) => (
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
      ))} */}
    </div>
  );
}

export default SubCategoryCharts;
