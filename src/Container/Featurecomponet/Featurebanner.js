import React from "react"
import Featurebannerimg3 from "../../Assests/Images/Featurebannerimg3.png"

const Featurebanner = () => {

  return (
    <>
      <div className=" container-fluid">
        <div className="row Feature-banner-back">
          <div className="col-lg-7 col-md-7 col-sm-12 ">
            <div className="Feature-banner-contain">
              <h1 className="">Join ShadiMasters </h1>
              <p className="mt-3">
                Get onboard, Get Promoted, Get Connected and nourish your wedding business with ShadiMasters.
              </p>
              <button type="button" className=" header-btn" >
                SIGN UP
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12  " >
            <img src={Featurebannerimg3} alt='...' className="img-fluid Featurebannerimg3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featurebanner;