import React from "react";
import IntroSubC from "./IntroSubC";

import SubCategoryUnit from "./SubCategoryUnit";

function SubCategory({ data, xAccessor }) {
  return (
    <section className="subCategory">
      <IntroSubC />
      <SubCategoryUnit data={data} xAccessor={xAccessor} />
    </section>
  );
}

export default SubCategory;
