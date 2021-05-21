import React from "react";
import mzImg from "../../img/mz.png";


function Header(props) {
  return (
      <div id="header">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header1_text">A World on the Cover</h1>
                <h1 className="header2_text">
                  An overview of <span className="hd_sl">Sanlian Lifeweek</span> from{" "}
                  <span className="hd_time">2003 - 2018</span>
                </h1>
                <h3 className="header3_text">by Yuan Fang</h3>
              </div>

              <div className="col-lg-4">
                <img className="hd_img" src={mzImg} alt="" />
              </div>
            </div>
          </div>
  );
}

export default Header;
