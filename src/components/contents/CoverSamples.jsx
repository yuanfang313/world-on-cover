import React, { Component } from 'react';
import coverImg_2003 from "../../img/coverSamples/2003.jpg";
import coverImg_2004 from "../../img/coverSamples/2004.jpg";
import coverImg_2005 from "../../img/coverSamples/2005.jpg";
import coverImg_2006 from "../../img/coverSamples/2006.jpg";
import coverImg_2007 from "../../img/coverSamples/2007.jpg";
import coverImg_2008 from "../../img/coverSamples/2008.jpg";
import coverImg_2009 from "../../img/coverSamples/2009.jpg";
import coverImg_2010 from "../../img/coverSamples/2010.jpg";
import coverImg_2011 from "../../img/coverSamples/2011.jpg";
import coverImg_2012 from "../../img/coverSamples/2012.jpg";
import coverImg_2013 from "../../img/coverSamples/2013.jpg";
import coverImg_2014 from "../../img/coverSamples/2014.jpg";
import coverImg_2015 from "../../img/coverSamples/2015.jpg";
import coverImg_2016 from "../../img/coverSamples/2016.jpg";
import coverImg_2017 from "../../img/coverSamples/2017.jpg";
import coverImg_2018 from "../../img/coverSamples/2018.jpg";
import coverImg_2019 from "../../img/coverSamples/2019.jpg";
import coverImg_2020 from "../../img/coverSamples/2020.jpg";


import CoverSampleData from '../../data-dev/coverSampleData';

const notation = "Hover over the covers beneath to check out the (first) headline..."
class CoverSamples extends Component {

    state = {
        year: "",
        headline_chinese: "",
        headline_english: notation
    }
    
    mouseEnter = (headline, i) => {
        this.setState({year: 2003 + i});
        this.setState({headline_chinese: headline.headline_chinese});
        this.setState({headline_english: headline.headline_english});

        console.log(i);
        console.log(headline.headline_chinese);
        console.log(headline.headline_english);
    };
    mouseOut = () => {
        this.setState({year: ""});
        this.setState({headline_chinese: ""});
        this.setState({headline_english: notation});
    }


    render() {
        const coverArr = [coverImg_2003, coverImg_2004, coverImg_2005, coverImg_2006, coverImg_2007, coverImg_2008, coverImg_2009, coverImg_2010, coverImg_2011, coverImg_2012, coverImg_2013, coverImg_2014, coverImg_2015, coverImg_2016, coverImg_2017, coverImg_2018, coverImg_2019, coverImg_2020];

        const Data = CoverSampleData.data.AprCover;
  
        return (
            <div id="introImage_2">
                
                <hr className="divider_updateInfo"/>
            <div className="updatedInfoContainer">
                <div className="row">
                    <div className="col-lg-1">
                    <p className="updatedInfo year">{this.state.year}</p>
                    </div>
                    <div id="updateText" className="col-lg-11">
                    <p className="updatedInfo english">{this.state.headline_english}</p>
                    <p className="updatedInfo chinese">{this.state.headline_chinese}</p>
                    </div>
                </div>
  
            </div>
            
        <ul className="CoverSampleContainer">
        {Data.map((el, i) => (
                <div key = {i} className="CoverSampleItem">
                <img id = {2003 + i} className="timeline_img_2" src={coverArr[i]} onMouseEnter={() => this.mouseEnter(el,i)} onMouseOut={() => this.mouseOut()} alt="cover"/>
                <p className="coverCaption">{el.year}</p>
                </div>
            ))   
            }
        </ul>
        <p className="caption">The last issue of April from 2003 to 2020 (data in 2019 and 2020 is not included in the analyse beneath)</p>
      </div>
        );
    }
}

export default CoverSamples;






