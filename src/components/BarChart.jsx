import React from "react";
import Chart from "./Chart";
import Bars from "./commonChart/Bars";
import Axis from "./commonChart/Axis";

function BarChart({ data, dimensions, xAccessor, category, onClickBar }) {
  return (
    <div className="barChart">
      <Chart dimensions={dimensions}>
        <Bars data={data} category={category} onClickBar={onClickBar} />
      </Chart>
    </div>
  );
}

export default BarChart;
