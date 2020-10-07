import React from "react";
import IntroSubC from "./IntroSubC";

import SubCategoryUnit from "./SubCategoryUnit";

function SubCategory({ data2, data3, xAccessor }) {
  return (
    <section className="subCategory">
      <IntroSubC />
      <SubCategoryUnit data2={data2} data3={data3} xAccessor={xAccessor} />
    </section>
  );
}

export default SubCategory;
