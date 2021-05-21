import React, { useState, useEffect } from "react";
import * as d3 from "d3";

// Components
import Header from "./components/contents/Header";
import MainIntro from "./components/contents/MainIntro";
import MainCategory from "./components/contents/MainCategory/MainCategory";
import SubCategory from "./components/contents/SubCategory/SubCategory";
import Summary from "./components/contents/Summary";
import Footer from "./components/contents/Footer";
// Data
import data from "./data-dev/data.json";
import data2 from "./data-dev/subDataOverYears.json";
import data3 from "./data-dev/subTotalComparison.json";

const dateParser = d3.timeParse("%Y");
const dateAccessor = (d) => dateParser(d.year);
const proportionAccessor = (d) => d.proportion;

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
        <MainIntro />
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
          xAccessor_lineChart={dateAccessor}
          xAccessor_barChart={proportionAccessor}
        /> 
        <Summary />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
