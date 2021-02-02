import React from "react";
import CultureFinding from "./subTexts_finding/CultureFinding";
import EconomyFinding from "./subTexts_finding/EconomyFinding";
import PoliticsFinding from "./subTexts_finding/PoliticsFinding";
import ScienceFinding from "./subTexts_finding/ScienceFinding";
import SocialFinding from "./subTexts_finding/SocialFinding";
import FigureFinding from "./subTexts_finding/FigureFinding";

function Finding({ category }) {
  const finding = {
    culture: <CultureFinding />,
    economy: <EconomyFinding />,
    politics: <PoliticsFinding />,
    science_and_technology: <ScienceFinding />,
    social_issue: <SocialFinding />,
    figure: <FigureFinding />,
  };

  return (
    <div className="finding">
      <h5 className="container">OTHER FINDINGS</h5>
      {finding[category.split(" ").join("_")]}
    </div>
  );
}

export default Finding;
