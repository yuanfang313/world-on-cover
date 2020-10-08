import React from "react";
import * as d3 from "d3";
import Dimensions from "../utils/Dimensions";
import LineChart from "../../LineChart";
import BarChart from "../../BarChart";

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
  categoryArr,
  color,
  onClickBar,
  changeCategory,
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
        color={color}
        index={index}
        bool={true}
      />
      <BarChart
        data={data3}
        dimensions={dimensionOfBarChart}
        category={category}
        subcategory={subcategory}
        color={color}
        onClickBar={onClickBar}
        changeCategory={changeCategory}
      />
    </div>
  );
}

export default SubCategoryCharts;
