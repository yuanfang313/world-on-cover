import React from "react";
import IntroMainC from "./IntroMainC";
import MainCategoryCharts from "./MainCategoryCharts";

function MainCategory({ data, categoryArr, colors, xAccessor }) {
  return (
    <section className="mainCategory">
      <IntroMainC />
      <MainCategoryCharts
        data={data}
        categoryArr={categoryArr}
        colors={colors}
        xAccessor={xAccessor}
      />
    </section>
  );
}

export default MainCategory;
