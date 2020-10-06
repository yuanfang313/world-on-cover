import React from "react";
import Summary from "./Summary";
import SubCategoryCharts from "./SubCategoryCharts";
import Finding from "./Finding";

function SubCategoryUnit({ data, xAccessor }) {
  return (
    <div>
      <Summary />
      <SubCategoryCharts data={data} xAccessor={xAccessor} />
      <Finding />
    </div>
  );
}

export default SubCategoryUnit;
