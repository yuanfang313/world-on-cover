import React from "react";

function IntroSubC(props) {
  return (
    <div className="theme2">
      <h2 className="title_ch">The Trend of Subcategories (2003 - 2018)</h2>
      <br />
      <p className="th2_text container">
        Here are the detailed contents about subcategories of headlines. Except
        the “NA” category, I selected the 6 subcategories that have the maximum
        proportions of each category to look into the shape of data, of which
        the quantitative relation is shown by the bar charts beneath.
      </p>
      <p className="th2_text container">
        You can hover over each bar in the bar charts to see how the proportion
        of a subcategory had changed every four years from 2003 to 2018.
      </p>
    </div>
  );
}

export default IntroSubC;
