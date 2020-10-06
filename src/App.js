import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "./App.css";
import Header from "./components/contents/Header";
import Intro from "./components/contents/Intro";
import MainCategory from "./components/contents/MainCategory";
import SubCategory from "./components/contents/SubCategory";

import data from "./data-dev/data.json";
import data2 from "./preData/culture.json";

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

  useEffect(() => {
    setData(data);
    setSubData(data2);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Intro />
        <MainCategory
          data={loadData}
          metrics={metrics}
          xAccessor={dateAccessor}
        />
        <SubCategory data={subData} xAccessor={dateAccessor} />
        {console.log(subData)}
      </main>
    </React.Fragment>
  );
}

export default App;
