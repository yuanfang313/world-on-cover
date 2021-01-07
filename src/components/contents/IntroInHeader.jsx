import React from "react";
import timelineImg from "../../img/timeline.svg";
import coverOfApr from "../../img/all.svg";

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
      <br />
      <p className="th2_text container">Now, <em className="ja2">Sanlian lifeweek </em> is one of the most respectful media in China. So, I decided to do some analysis of the headlines
          on the covers of <em className="ja2">Sanlian Lifeweek</em> from <span className="ja2">2003 – 2018</span> (the time range that’s covered by its <a href="http://www.lifeweek.com.cn/magazine/lifeweek/2019/">archive online</a>), to see how its contents
          had changed over time.</p>
       
      <div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <img className="timeline_img" src={coverOfApr} alt="" />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <p className="ja3">The last issue of April from 2003 to 2018</p>
      </div>

    </section>
  );
}

export default IntroInHeader;
