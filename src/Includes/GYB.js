import vendoricon from "../Assests/Images/vendoricon.svg";
import GYBimage from "../Assests/Images/GYBimage.png";
import webicon from "../Assests/Images/webicon.svg";
import Enquiry from "../Assests/Images/Enquiry.svg";
import remove from "../Assests/Images/remove.svg";
import fcc from "../Assests/Images/fcc.svg";
import statistic from "../Assests/Images/statistic.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";


const GYB = (props) =>{

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);


    return(

        <>

<div className=" container-fluid Grow-c" data-aos={props.animation}>
        <div className="row Grow-r ">
            <div className="col-12">
                <h2>Grow Your Business</h2>
                <hr className="w-25 G-hr" />
            </div>
        </div>

            <div className="row Grow-r2 ">
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <div className="row G-b-icon-r">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img src={vendoricon} className="G-searchimg" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <h5>Branding</h5>
                        </div>
                    </div>
                    
                    <div className="row G-b-icon-r">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img src={webicon} className="G-searchimg" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <h5>Personalized Webpage</h5>
                        </div>
                    </div>

                    <div className="row G-b-icon-r">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img src={Enquiry} className="G-searchimg" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <h5>Enquiry Management</h5>
                        </div>
                    </div>

                    <div className="row G-b-icon-r">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img src={remove} className="G-searchimg" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <h5>Reviews</h5>
                        </div>
                    </div>

                    <div className="row G-b-icon-r">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img src={fcc} className="G-searchimg" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <h5>Event Management</h5>
                        </div>
                    </div>

                    <div className="row G-b-icon-r">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img src={statistic} className="G-searchimg" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <h5>Growth Statistics </h5>
                        </div>
                    </div>
                    <button type="button" className="GYB-btn">LEARN MORE</button>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 gyb-img-box">
                    <img src={GYBimage}  className="GYBimage img-fluid" />
                </div>

                

            </div>
        
    </div>

    

        </>


    );
}

export default GYB;