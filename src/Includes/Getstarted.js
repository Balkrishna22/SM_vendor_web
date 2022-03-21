import React from 'react';
import { BsChevronRight } from "react-icons/bs";
import Getfound from "./Getfound";
import Founddata from "./Foundata";

const Getstarted = () => {


  return (
    <div className=" container-fluid">
      <div className="row Guides-r">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="Guides-box">
            <h5>Guides with ShadiMasters</h5>
            <h5 className="G-h5-c2">
              GET STARTED <BsChevronRight />
            </h5>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="row">
            {Founddata.map((val, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                  <div className="">
                    {/* <img src={searchicon} className="G-searchimg" />
                  <h6>Get Found</h6> */}
                    <Getfound
                      data={val}
                    />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};
export default Getstarted;


{/* <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="Guides-box2">
                <img src={connectedicon} className="G-searchimg" />
                  <h6>Get Connected</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="Guides-box2">
                <img src={Interacted} className="G-searchimg" />
                  <h6>Get Interacted</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="Guides-box2">
                <img src={Revenues} className="G-searchimg" />
                  <h6>Make Revenues</h6>
              </div>
            </div> */}