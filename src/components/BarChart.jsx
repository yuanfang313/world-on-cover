import React from "react";
import Chart from "./Chart";
import Bars from "./commonChart/Bars";

function BarChart({
  data,
  dimensions,
  category,
  subcategory,
  color,
  onClickBar,
  changeCategory,
}) {
  return (
    <div className="barChart">
      <Chart dimensions={dimensions}>
        <Bars
          data={data}
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
