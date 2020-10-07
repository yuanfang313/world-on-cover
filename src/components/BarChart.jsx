import React from "react";
import Chart from "./Chart";
import Bars from "./commonChart/Bars";

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
