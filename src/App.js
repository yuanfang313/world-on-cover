import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "./App.css";
import Header from "./components/contents/Header";
import IntroInHeader from "./components/contents/IntroInHeader";
import MainCategory from "./components/contents/MainCategory/MainCategory";
import SubCategory from "./components/contents/SubCategory/SubCategory";

import data from "./data-dev/data.json";
import data2 from "./preData/subDataOverYears.json";
import data3 from "./preData/subTotalComparison.json";

const dateParser = d3.timeParse("%Y");
const dateAccessor = (d) => dateParser(d.year);

const categoryArr = Object.keys(data[0]).slice(2);
const colorArr = [
  "#11a579",
  "#cc503e",
  "#3969ac",
  "#f2b701",
  "#7f3c8d",
  "#66c5cc",
  "#80ba5a",
  "#e68310",
  "#cf1c90",
  "#008695",
  "#f97b72",
  "#4b4b8f",
];

// const metrics = {
//   culture: "#11a579",
//   economy: "#cc503e",
//   politics: "#3969ac",
//   education: "#f2b701",
//   sports: "#7f3c8d",
//   science_and_technology: "#66c5cc",
//   history_events: "#80ba5a",
//   news_events: "#e68310",
//   social_issue: "#cf1c90",
//   figure: "#008695",
//   personal_livelihood: "#f97b72",
//   personal_issue_and_cultivation: "#4b4b8f",
// };

function App() {
  const [loadData, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [subTotalData, setSubTotalData] = useState([]);

  useEffect(() => {
    setData(data);
    setSubData(data2);
    setSubTotalData(data3);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <IntroInHeader />
        <MainCategory
          data={loadData}
          categoryArr={categoryArr}
          colors={colorArr}
          xAccessor={dateAccessor}
        />
        <SubCategory
          data2={subData}
          data3={subTotalData}
          colors={colorArr}
          categoryArr={categoryArr}
          xAccessor={dateAccessor}
        />{" "}
      </main>{" "}
    </React.Fragment>
  );
}

export default App;
