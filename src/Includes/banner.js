import React, { useState} from "react";
import { GiCheckMark } from "react-icons/gi";
import { SignupModal } from "./Modal/SignupModal";

const REACT_APP_API_REDIRECT_URL = process.env.REACT_APP_API_REDIRECT_URL;
const Banner = () => {

  const [show, setShow] = useState(false);

  return (

    <div className=" container-fluid">
      <div className="row home-banner-back">
        <div className="col-lg-4 col-md-8 col-sm-12  ">

        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 ">
          <div className="float-right">
            <h1 className="">
              Be the King of your Business with ShadiMasters
            </h1>
            <div className="ml-5">
              <p className="mt-3">
                <GiCheckMark /> Roar Out loud and strengthen your digital
                presence.
              </p>
              <p>
                <GiCheckMark /> Set the long term business goals.
              </p>
              <p>
                <GiCheckMark /> Get noticed, get promoted & get benefited with
                simple steps, SignUP today
              </p>
            </div>
            <a href={REACT_APP_API_REDIRECT_URL} target="_blank">
              <button
                type="button"
                className=" ml-5 header-btn"
              // onClick={() => setShow(true)}
              >
                SIGN IN
              </button>
            </a>
            <button
              type="button"
              className=" header-btn ml-2"
              onClick={() => setShow(true)}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <SignupModal
        closeHandle={setShow}
        openModal={show}
      />

    </div>


  );
};

export default Banner;
