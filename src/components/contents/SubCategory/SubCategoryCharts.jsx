import React from "react";
import Dimensions from "../../../utils/Dimensions";
import LineChart from "../../LineChart";
import BarChart from "../../BarChart";

const dimensionsOfLineChart = new Dimensions(270, 1, 30, 30, 30, 60);
const dimensionOfBarChart = new Dimensions(270, 1, 0, 30, 0, 30);

function SubCategoryCharts({
  data2,
  data3,
  xAccessor_lineChart,
  xAccessor_barChart,
  category,
  subcategory,
  index,
  categoryArr,
  color,
  onClickBar,
  changeCategory,
  ...props
}) {
  let changingData = data2.slice(index * 4, index * 4 + 4);
  return (
    <div className="subChartContainer">
      <LineChart
        data={changingData}
        dimensions={dimensionsOfLineChart}
        xAccessor={xAccessor_lineChart}
        yAccessor={(d) => d[subcategory]}
        category={subcategory}
        color={color}
        bool={true}
      />
      <BarChart
        data={data3}
        dimensions={dimensionOfBarChart}
        xAccessor={xAccessor_barChart}
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
