import vendoricon from "../../Assests/Images/vendoricon.svg";
import webicon from "../../Assests/Images/webicon.svg";
import Enquiry from "../../Assests/Images/Enquiry.svg";
import remove from "../../Assests/Images/remove.svg";
import fcc from "../../Assests/Images/fcc.svg";
import statistic from "../../Assests/Images/statistic.svg";
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
    };

    return (
      <>
        <div className="container-fluid slider-r ">
          <div className="">
            {/* <h2> Single Item</h2> */}
            <Slider {...settings}>
              <div className="cardslide">
                <img className="m-auto cardslide-img" src={vendoricon} />
                <h6 className="cardtext">Branding</h6>
              </div>
              <div className="cardslide">
                <img className="m-auto cardslide-img" src={webicon} />
                <h6 className="cardtext">Personalized Webpage</h6>
              </div>
              <div className="cardslide">
                <img className="m-auto cardslide-img" src={Enquiry} />
                <h6 className="cardtext">Enquiry Management</h6>
              </div>
              <div className="cardslide">
                <img className="m-auto cardslide-img" src={remove} />
                <h6 className="cardtext">Reviews</h6>
              </div>
              <div className="cardslide">
                <img className="m-auto cardslide-img" src={fcc} />
                <h6 className="cardtext">Free Customer Contacts</h6>
              </div>
              <div className="cardslide">
                <img className="m-auto cardslide-img" src={statistic} />
                <h6 className="cardtext">Growth Statistics</h6>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

// export default Featureslider;
