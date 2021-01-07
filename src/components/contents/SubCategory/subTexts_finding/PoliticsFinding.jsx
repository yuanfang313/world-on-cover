import React from "react";

function PoliticsFinding(props) {
  return (
    <React.Fragment>
      <p className="th2_text container">
        1. There are 8 headlines falling into{" "}
        <span className="ja">"Warfare"</span>, 7 of which are about Iraq War
        (5/7) and Gulf War (2/7). And they all appeared in 2003.
        <br />
        2. There are 5 headlines falling into{" "}
        <span className="ja">"Military"</span>, which only focus on two kinds of
        contents: Navy (3/5) and Military Parade (2/5).
        <br />
        3. Nearly half of the headlines (8/19) falling into
        <span className="ja">"Foreign Politics"</span> are about Countries in
        Middle East.
        <br />
        4. Most headlines (6/8) falling into
        <span className="ja">"International Politics"</span> are about
        territorial disputes.
      </p>
    </React.Fragment>
  );
}

export default PoliticsFinding;
