import React from "react";

function PoliticsFinding(props) {
  return (
    <React.Fragment>
      <p className="th2_text container">
        1. There are eight headlines falling into <span className="ja2">Warfare</span>. Seven of them are about <span className="ja2">Iraq War</span> 
         (5/7) and <span className="ja2">Gulf War</span> (2/7), which all appeared in 2003.
        <br />
        2. There are five headlines falling into
        <span className="ja2"> Military</span>, which only focus on two kinds of
        contents: <span className="ja2">Navy</span> (3/5) and <span className="ja2">Military Parade</span> (2/5).
        <br />
        3. Nearly half of the headlines (8/19) falling into
        <span className="ja2"> Foreign Politics</span> are about countries in
        <span className="ja2"> Middle East</span>.
        <br />
        4. Most headlines (6/8) falling into
        <span className="ja2"> International Politics</span> are about
        <span className="ja2"> territorial disputes</span>.
      </p>
    </React.Fragment>
  );
}

export default PoliticsFinding;
