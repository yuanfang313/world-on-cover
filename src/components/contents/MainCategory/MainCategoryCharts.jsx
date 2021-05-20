import React from "react";
import LineChart from "../../LineChart";
import Dimensions from "../utils/Dimensions";

const dimensions = new Dimensions(270, 1, 50, 30, 30, 60);

function MainCategoryCharts({ categoryArr, colors, data, xAccessor }) {
  return (  
    <div className="chart">
      {categoryArr.map((el, i) => (
        <LineChart
          key={i}
          data={data}
          dimensions={dimensions}
          xAccessor={xAccessor}
          yAccessor={(d) => d[el]}
          category={el}
          color={colors[i]}
        />
      ))}
    </div>   
  );
}

export default MainCategoryCharts;
