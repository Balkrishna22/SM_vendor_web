import img01 from "../../Assests/Images/img01.png";
import img02 from "../../Assests/Images/img02.png";
import img03 from "../../Assests/Images/img03.png";
import img04 from "../../Assests/Images/img04.png";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const ShadiVendor = (props) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className="container-fluid px-lg-5 px-3 mb-4"
        id="whySmVendor"
        data-aos={props.animation}
      >
        <div className="row px-lg-5 px-3 ">
          <div className="col-md-12 mb-4 text-center">
            <h2 className="whySmheading">ShadiMasters for Vendor</h2>
            <hr className="w-25 E-hr" />
          </div>
          <div className="col-xl-10 mx-auto pt-3">
            <div className="row justify-content-center">
              <div className="col-sm-3 col-6 mb-3  text-center">
                <img src={img01} className="whySmicon" />
                <h5 className="my-4 fw-bold">Get Found</h5>
              </div>
              <div className="col-sm-3 col-6 mb-3  text-center">
                <img src={img02} className="whySmicon" />
                <h5 className="my-4 fw-bold">Get Connected</h5>
              </div>
              <div className="col-sm-3 col-6 mb-3  text-center">
                <img src={img03} className="whySmicon" />
                <h5 className="my-4 fw-bold">Get Interacted</h5>
              </div>
              <div className="col-sm-3 col-6 mb-3  text-center">
                <img src={img04} className="whySmicon" />
                <h5 className="my-4 fw-bold">Make Revenues</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mx-auto px-lg-5 px-3 text-center d-flex flex-column">
            <p className="text-muteds lh-lg flex-grow-1">
              <span className="logotext">ShadiMasters</span> ranks very highly
              with the major search engines for event-related search terms. The
              vast majority of our visitors come as a result of searching for a
              place or a service for their event. Try it out!
            </p>

            <p className="text-muteds lh-lg flex-grow-1">
              Unlike some other Wedding marketplace,{" "}
              <span className="logotext">ShadiMasters</span> provides you the
              opportunity to connect with potential clients in multiple ways to
              ensure profitable results. It also offers a digital place to
              showcase your services and products effectively throughout PAN
              India. User- friendly and highly effective technologies enable
              ease to operate your business effortlessly. There are many more to
              come soon till then….. Stay tuned !!
            </p>
            <p className="text-muteds lh-lg flex-grow-1">
              Get Noticed to a whole new world of End users who are on a
              constant look out for you.
            </p>

            {/* <p className="mb-3 text-center fw-bold">Are you ready?</p>
                    <div className="row">
                        <div className="col-xl-4 col-sm-6 col-9 mb-4 mx-auto">
                            <button className=" whySmbtn  w-100" data-bs-toggle="modal" data-bs-target="#registerAsVendor">Register as A vendor!</button>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShadiVendor;
