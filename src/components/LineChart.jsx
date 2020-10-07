import React from "react";
import Chart from "./Chart";
import Line from "./commonChart/Line";
import Axis from "./commonChart/Axis";

function LineChart({
  data,
  dimensions,
  xAccessor,
  yAccessor,
  xScale,
  yScale,
  label,
  index,
  category,
  bool,
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
          index={index}
          bool={bool}
        />
      </Chart>
    </div>
  );
}

export default LineChart;
