import React from "react";

function FigureIntro(props) {
  return (
    <React.Fragment>
      <p className="th2_text container">
        The category, “Figure” refers to people who were introduced as{" "}
        <span className="ja2">individuals who were not criminals</span>. This
        category is consisted of <span className="ja2"> 14 subcategories</span>,
        the rest of which are:
        <span className="ja">
          Military Commanders, Scientists, Athletes, Astronauts, Doctors,
          Philosophers, Professors and Translators.
        </span>
      </p>
      <p className="th2_text container">
        The individuals whose occupations only appeared once from 2003 to 2018
        are classNameified as “NA”, which consist 8.9% of this category.
      </p>
    </React.Fragment>
  );
}

export default FigureIntro;
