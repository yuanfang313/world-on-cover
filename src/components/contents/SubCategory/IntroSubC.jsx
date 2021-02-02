import React from "react";

function IntroSubC(props) {
  return (
    <div className="subtheme container">
      <h2 className="title_ch">Trend of Subtheme on the Cover</h2>
      <p>
        As Cover Story normally would discusses a specific topic, each <span className="ja2">Main Theme</span> can be categorized into multiple <span className="ja2">Subthemes</span>. The charts beneath shown the patterns of these subthemes. I selected the six subthemes that occupy the maximum proportions of the six main themes of the cover.
      </p>
    
      <p className="notation">
        * Hover over each bar in the bar charts to see how the proportion of a subtheme changed every four years from 2003 to 2018.
      </p>
    </div>
  );
}

export default IntroSubC;
