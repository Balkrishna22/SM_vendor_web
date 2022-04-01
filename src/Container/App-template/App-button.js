
import Bannerimgapp from "../../Assests/Images/Bannerimgapp.png"
import Googleapp from "../../Assests/Images/Googleapp.png"
import Appstore from "../../Assests/Images/Appstore.png"
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Appbanner = (props) =>{


    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return(

        <>

            <div className="container-fluid  App-c" data-aos={props.animation}>
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                            <img src={Bannerimgapp} className="img-fluid bannerappimg"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <div className="Apptext">
                        <h2>SHADIMASTERS</h2>
                        <hr className="w-25"/>
                        <p>Soon we are coming up with mobile apps for iOS & Android <br></br>users. </p>
                        <h5>DOWNLOAD NOW</h5>
                        <div className=" app-button">
                        <img src={Googleapp} className="img-fluid app1"/>
                        <img src={Appstore} className="img-fluid app2"/>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Appbanner;