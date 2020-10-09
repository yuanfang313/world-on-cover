import React from "react";
import Chart from "./Chart";
import Line from "./commonChart/Line";
import Axis from "./commonChart/Axis";
import Circle from "./commonChart/Circle";

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
  subcategory,
  color,
  bool,
  ...props
}) {
  const xAccessorScaled = (d) => xScale(xAccessor(d));
  const yAccessorScaled = (d) => yScale(yAccessor(d));
  const keyAccessor = (d, i) => i;

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
          color={color}
        />
        <Circle
          {...props}
          data={data}
          keyAccessor={keyAccessor}
          xAccessor={xAccessorScaled}
          yAccessor={yAccessorScaled}
          subcategory={subcategory}
          category={category}
          index={index}
          bool={bool}
          color={color}
        />
      </Chart>
    </div>
  );
}

export default LineChart;
