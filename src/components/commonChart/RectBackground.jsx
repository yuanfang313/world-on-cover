import React from "react";
import { useChartDimensions } from "../Chart";

function RectBackground(props) {
  const dimensions = useChartDimensions();
  return (
    <rect
      x={0}
      y={0}
      width={dimensions.boundedWidth}
      height={dimensions.boundedHeight}
      fill="#f8f8f8"
    />
  );
}

export default RectBackground;
