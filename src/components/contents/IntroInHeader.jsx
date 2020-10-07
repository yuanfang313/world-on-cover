import React from "react";
import timelineImg from "../../img/timeline.svg";

function IntroInHeader(props) {
  return (
    <section id="intro">
      <p className="th2_text container">
        <em className="ja2">Sanlian Lifeweek </em> is a magazine in China, which
        was first founded in <span className="ja2">1925</span> (known as Life
        weekly then) and revived in <span className="ja2">1995</span>. In{" "}
        <span className="ja2">1926</span>,{" "}
        <span className="ja2">Zou Taofen</span> (邹韬奋) became editor of the
        magazine and
        <em className="ja2">
          “changed its mission from vocational education to political reporting
          and social criticism”.
        </em>{" "}
        The magazine increased in circulation under Zou’s editorship from 2,800
        in 1925 to 80,000 in 1930. In 1932, it created the highest circulation
        record in China, which issued 150,000 copies per issue. In{" "}
        <span className="ja2">1933</span>, it was closed by the government.
      </p>

      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <img className="timeline_img" src={timelineImg} alt="" />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </section>
  );
}

export default IntroInHeader;
