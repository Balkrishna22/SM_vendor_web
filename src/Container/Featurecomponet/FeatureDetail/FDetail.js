import React, { useState } from "react";
import FD4 from "../../../Assests/Images/FD4.png";
import FD1 from "../../../Assests/Images/FD1.png";
import FD2 from "../../../Assests/Images/FD2.png";
import FD3 from "../../../Assests/Images/FD3.png";

const FeatureD = () => {
  const [ImageState, setImageState] = useState();
  const currentSlide = (num) => {
      console.log(num)
    setImageState(num);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="row ">
              <div className="col-lg-2 col-md-2 col-sm-12 Fcontain">
                <div className="row d-flex flex-column">
                    <div className="column">
                        <img
                        className="demo cursor"
                        src={FD4}
                        onClick={()=>currentSlide(1)}
                        alt="The Woods"
                        />
                    </div>
                  <div className="column">
                    <img
                      className="demo cursor"
                      src={FD1}
                      onClick={()=>currentSlide(2)}
                      alt="Cinque Terre"
                    />
                  </div>
                  <div className="column">
                    <img
                      className="demo cursor"
                      src={FD2}
                      onClick={()=>currentSlide(3)}
                      alt="Mountains and fjords"
                    />
                  </div>
                  <div className="column">
                    <img
                      className="demo cursor"
                      src={FD3}
                      onClick={()=>currentSlide(4)}
                      alt="Northern Lights"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12">
                {ImageState === 1 && (
                  <div>
                    <div className="numbertext">1 / 6</div>
                    <img
                      src={FD4}
                      className="mainslide"
                      style={{ width: "100%" }}
                    />
                  </div>
                )}

                {ImageState === 2 && (
                  <div>
                    <div className="numbertext">2 / 6</div>
                    <img src={FD1} className="mainslide" />
                  </div>
                )}

                {ImageState === 3 && (
                  <div>
                    <div className="numbertext">3 / 6</div>
                    <img src={FD2} className="mainslide" />
                  </div>
                )}

                {ImageState === 4 && (
                  <div>
                    <div className="numbertext">4 / 6</div>
                    <img src={FD3} className="mainslide" />
                  </div>
                )}

                <a className="prev" onClick="plusSlides(-1)">
                  ❮
                </a>
                <a className="next" onClick="plusSlides(1)">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <h3>hello</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeatureD;
