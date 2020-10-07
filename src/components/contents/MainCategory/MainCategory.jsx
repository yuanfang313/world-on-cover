import React from "react";
import IntroMainC from "./IntroMainC";
import MainCategoryCharts from "./MainCategoryCharts";

function MainCategory({ data, metrics, xAccessor }) {
  return (
    <section className="mainCategory">
      <IntroMainC />
      <MainCategoryCharts data={data} metrics={metrics} xAccessor={xAccessor} />
    </section>
  );
}

export default MainCategory;
