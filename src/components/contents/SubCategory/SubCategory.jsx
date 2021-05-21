import React, { Component } from "react";
import SubCategoryCharts from "./SubCategoryCharts";
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
    changeCategory: false,
  };

  handleClick = (category) => {
    let changed = this.state.changeCategory;
    this.setState({
      category: category,
      indexOfCategory: subMetrics.indexOf(category),
      subcategory: subMetrics2[subMetrics.indexOf(category)],
      changeCategory: !changed,
    });
  };

  handleClickBar = (subcategory, index) => {
    this.setState({ subcategory, indexOfCategory: index });
  };

  render() {
    const {
      data2,
      data3,
      xAccessor_lineChart,
      xAccessor_barChart,
      categoryArr,
      colors,
    } = this.props;

    return (
      <section className="subCategoryUnit">
        <div className="subtheme container">
          <h2 className="title_ch">Trend of Subtheme on the Cover</h2>
          <p>As Cover Story normally would discusses a specific topic, each <span className="ja2">Main Theme</span> can be categorized into multiple <span className="ja2">Subthemes</span>. The charts beneath shown the patterns of these subthemes. I selected the six subthemes that occupy the maximum proportions of the six main themes of the cover.</p>
          <p className="notation">
            * Hover over each bar in the bar charts to see how the proportion of a subtheme changed every four years from 2003 to 2018.
          </p>
        </div>
        <SubNav onClick={this.handleClick} index={this.state.indexOfCategory} num />
        <SubCategoryCharts
          data2={data2}
          data3={data3}
          category={this.state.category}
          subcategory={this.state.subcategory}
          index={this.state.indexOfCategory}
          onClickBar={this.handleClickBar}
          xAccessor_lineChart={xAccessor_lineChart}
          xAccessor_barChart={xAccessor_barChart}
          color={colors[categoryArr.indexOf(this.state.category)]}
          changeCategory={this.state.changeCategory}
        />
        <Intro category={this.state.category} />
        <hr />
        <Finding category={this.state.category} />
      </section>
    );
  }
}

export default SubCategory;
