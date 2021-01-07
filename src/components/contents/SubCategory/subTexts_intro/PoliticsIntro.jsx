import React from "react";

function PoliticsIntro(props) {
  return (
    <React.Fragment>
      <p className="th2_text container">
        The category, “Politics” is consisted of{" "}
        <span className="ja2"> 11 subcategories</span>, the rest of which are:
        <span className="ja">
          Judicial System, Military, Infrastructure, Diplomacy, Political System
        </span>
        .
      </p>
    </React.Fragment>
  );
}

export default PoliticsIntro;
