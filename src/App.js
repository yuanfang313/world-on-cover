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

const metrics = [
  "culture",
  "economy",
  "politics",
  "education",
  "sports",
  "science and technology",
  "history events",
  "news events",
  "social issue",
  "figure",
  "personal livelihood",
  "personal issue and cultivation",
];

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
          metrics={metrics}
          xAccessor={dateAccessor}
        />
        <SubCategory
          data2={subData}
          data3={subTotalData}
          xAccessor={dateAccessor}
        />{" "}
      </main>{" "}
    </React.Fragment>
  );
}

export default App;
