import React from "react";

function IntroMainC(props) {
  return (
    <div className="theme1">
      <h2 className="title_ch">The Trend of Main Categories (2003 - 2018)</h2>
      <p className="th2_text container">
        After recording almost all the headlines on its covers from 2003 to
        2018, the main categories of headlines on{" "}
        <em className="ja2">Sanlian Lifeweek</em> finally were confirmed. For
        the number of the headlines in each year is different, the values in a
        chart below are calculated as the proportion of a particular category in
        a year.
      </p>
      <p className="th2_text container">
        As you can see below, the{" "}
        <span className="ja2">increasing patterns</span> appear in the
        categories:
        <span className="ja">
          Culture, Education, Science and Technology, Personal Issue and
          Cultivation;
        </span>{" "}
        the <span className="ja2">decreasing patterns</span> appear in the
        categories:
        <span className="ja">Economy,Politics and News Events</span>.
      </p>
    </div>
  );
}

export default IntroMainC;
