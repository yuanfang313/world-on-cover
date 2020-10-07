import React, { Component } from "react";
import SubCategoryCharts from "./SubCategoryCharts";
import IntroSubC from "./IntroSubC";
import SubNav from "./SubNav";
import Intro from "./Intro";
import Finding from "./Finding";

const subMetrics = [
  "culture",
  "economy",
  "politics",
  "science and technology",
  "social issue",
  "figure",
];

const subMetrics2 = [
  "culture of daily life",
  "industries and sectors",
  "policy",
  "archaeology",
  "crime issues",
  "celebrities",
];

class SubCategory extends Component {
  state = {
    category: "culture",
    subcategory: "culture of daily life",
    indexOfCategory: 0,
    navChanged: false,
  };

  handleClick = (category) => {
    this.setState({
      category: category,
      indexOfCategory: subMetrics.indexOf(category),
      subcategory: subMetrics2[subMetrics.indexOf(category)],
    });
  };

  handleClickBar = (subcategory, index) => {
    this.setState({ subcategory, indexOfCategory: index });
    console.log(index);
  };

  render() {
    const { data2, data3, xAccessor } = this.props;

    return (
      <div className="subCategoryUnit">
        <IntroSubC />
        <SubNav onClick={this.handleClick} />
        <Intro category={this.state.category} />
        <SubCategoryCharts
          data2={data2}
          data3={data3}
          category={this.state.category}
          subcategory={this.state.subcategory}
          index={this.state.indexOfCategory}
          onClickBar={this.handleClickBar}
          xAccessor={xAccessor}
        />
        <Finding category={this.state.category} />
      </div>
    );
  }
}

export default SubCategory;
