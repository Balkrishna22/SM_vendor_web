
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor et risus et venenatis. Etiam nec nunc sagittis, placerat nulla nec, tincidunt turpis. Nulla facilisi. Donec eget tellus </p>
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