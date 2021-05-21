import React from "react";
import CultureIntro from "./subTexts_intro/CultureIntro";
import EconomyIntro from "./subTexts_intro/EconomyIntro";
import PoliticsIntro from "./subTexts_intro/PoliticsIntro";
import ScienceIntro from "./subTexts_intro/ScienceIntro";
import SocialIntro from "./subTexts_intro/SocialIntro";
import FigureIntro from "./subTexts_intro/FigureIntro";

function Intro({ category }) {
  const intro = {
    culture: <CultureIntro />,
    economy: <EconomyIntro />,
    politics: <PoliticsIntro />,
    science_and_technology: <ScienceIntro />,
    social_issue: <SocialIntro />,
    figure: <FigureIntro />,
  };

  return (
    
    <div className="sub_intro container">
      <h5 className="container">{category.toUpperCase()}</h5>
      {intro[category.split(" ").join("_")]}
      {console.log(category)}</div>
  );
}

export default Intro;
