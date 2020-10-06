import React from "react";

import Line from "./commonChart/Line";
import Chart from "./Chart";
import Axis from "./commonChart/Axis";

function LineChart({
  data,
  dimensions,
  xAccessor,
  yAccessor,
  xScale,
  yScale,
  label,
  ...props
}) {
  const xAccessorScaled = (d) => xScale(xAccessor(d));
  const yAccessorScaled = (d) => yScale(yAccessor(d));

  return (
    <div className="lineChart">
      <Chart dimensions={dimensions}>
        <Axis dimension="x" scale={xScale} label={label} />
        <Axis dimension="y" scale={yScale} label={label} />
        <Line
          {...props}
          data={data}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
        />
      </Chart>
    </div>
  );
}

export default LineChart;
