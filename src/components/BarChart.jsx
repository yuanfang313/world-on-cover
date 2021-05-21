import React from "react";
import * as d3 from "d3";
import Chart from "./Chart";
import Bars from "./chartElement/Bars";

function BarChart({
  data,
  dimensions,
  xAccessor,
  category,
  subcategory,
  color,
  onClickBar,
  changeCategory,
}) {
  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, dimensions.boundedWidth * 3.5]);
  const xAccessorScaled = (d) => xScale(xAccessor(d));

  return (
    <div className="barChart">
      <Chart dimensions={dimensions}>
        <Bars
          data={data}
          dimensions={dimensions}
          xAccessor={xAccessorScaled}
          category={category}
          subcategory={subcategory}
          color={color}
          onClickBar={onClickBar}
          changeCategory={changeCategory}
        />
      </Chart>
    </div>
  );
}

export default BarChart;
