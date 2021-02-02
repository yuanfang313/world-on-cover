import React from "react";
import timelineImg from "../../img/timeline.svg";
import CoverSamples from "./CoverSamples";

function IntroInHeader(props) {
  return (
    <section id="intro">
      <div id="introText_1" className="introText container">
     <p><em className="ja2">Sanlian Lifeweek </em> is an influential Chinese magazine mainly focusing on topics in <span className="ja2">Culture</span> and <span className="ja2">News</span>. It was first founded in <span className="ja2">1925</span> (known as <em>Life Weekly</em> then). And after being closed in <span className="ja2">1933</span>, <em>Life Weekly</em> (change its name to <em>Sanlian Lifeweek</em> ) was revived in <span className="ja2">1995</span>, the 100th anniversary of its founder and former editor in chief, <span className="ja2">Zou Taofen (邹韬奋)</span>.</p>

    <p>This project is a try to explore <span className="ja2">the changes of the magazine from 2003 to 2018</span> (which period's data is covered by its <a href="http://www.lifeweek.com.cn/magazine/lifeweek/2019/">online archive</a> ), from the perspective of the themes of its <span className="ja2">Cover Story</span>.</p>

    <p className="notation">* The <b>Cover Story</b> is a column in <em>Sanlian Lifeweek</em>, consisting of a series of articles on a related topic. One article's headline would be printed on the cover.</p>
      </div>
     
      <div id="introImage_1">
          <img className="timeline_img_1" src={timelineImg} alt="" />
      </div>


      {/* <div id="img_1" className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <img className="timeline_img_1" src={timelineImg} alt="" />
        </div>
        <div className="col-lg-1"></div>
      </div> */} 
      <CoverSamples />

    </section>
  );
}

export default IntroInHeader;
