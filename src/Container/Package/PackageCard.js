
import PackageData from "./PackageData"
import PackageCardComponent from "./PackageRoundCard"
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const PackageCard = (props) =>{


  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

    return(
        <>
        

        <div className="container-fluid Prow-r" data-aos={props.animation}>
            <div className="row  ">
                <div className="col-12">
                    <h2>Packages</h2>
                    <hr className="w-25 P-hr" />
                    <h6>Shadimasters Brings Special Forts For You</h6>
                </div>
            </div>

            <div className="row Prow-r2 mt-3">

            {PackageData.map((val, index) => {
            //  console.log(val.imagesrc);
              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-3">
                    
                    <PackageCardComponent
                      abcd={val}
                    />
                </div>
              );
            })} 

               

            </div>
            <p className="text-center mt-1">To know the best suitable package for you, send your enquiry via <br /><b style={{color:"#01448B"}}>Quick Enquiry.</b></p>

            </div>



        {/* </div> */}


        </>
    );

}

export default PackageCard;