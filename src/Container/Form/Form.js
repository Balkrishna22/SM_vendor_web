import React, { useEffect, useState, useRef } from "react";

import FormImage from "../../Assests/Images/FormImage.png";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { FaQuora } from "react-icons/fa";
import authServices from "../../Services/authServices";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
const FormSection = (props) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  const [userDetails, setUserDetails] = useState({
    vendor_email: "",
    vendor_phone: "",
    first_name: "",
    last_name: "",
    business_name: "",
    business_age: "",
    message: "",
  });

  const [, forceUpdate] = useState("");

  const validator = useRef(
    new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formValid = validator.current.allValid();
    if (formValid) {
      authServices.enquiryForm(userDetails).then((res) => {
        if (res.status === true) {
          if (res.data.profile_completed) {
            setUserDetails({
              vendor_email: "",
              vendor_phone: "",
              first_name: "",
              last_name: "",
              business_name: "",
              business_age: "",
              message: "",
            });
            toast.success(res.message);
          } else {
            setUserDetails({
              vendor_email: "",
              vendor_phone: "",
              first_name: "",
              last_name: "",
              business_name: "",
              business_age: "",
              message: "",
            });
            toast.success(res.message);
          }
        } else {
          toast.error(res.message);
        }
      });
    } else {
      validator.current.showMessages();
    }
  };
  return (
    <>
      <div className="container-fluid from-c">
        {/* <div className="container"> */}
        <div className="row form-m-r" data-aos={props.animation}>
          <div className="col-lg-10 m-auto">
            <div className="row  form-r">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={FormImage} className="img-fluid form-img" />

                <div className="form-icon">
                  <a
                    href="https://www.facebook.com/theshadimasters"
                    target="_blank"
                  >
                    <RiFacebookFill className="icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/shadimasters/"
                    target="_blank"
                  >
                    <RiInstagramFill className="icon" />
                  </a>
                  <a href="https://twitter.com/ShadiMasters" target="_blank">
                    <RiTwitterFill className="icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQH7H7EVynWugwAAAX-10O545tOTGv0nZ4HKvED0Shg9NbwAdikFnVzkd9-QV1JOghTb0lYUkqlISRBWoXLfafXetZGjIwv7YJC6-lG_xK7JjY7vzrjESBQItmwA3bhNBOtXSSo=&originalReferer=https://shadimasters.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fshadimasters%2F"
                    target="_blank"
                  >
                    <RiLinkedinFill className="icon" />
                  </a>
                  <a
                    href="https://www.quora.com/profile/Shadi-Masters"
                    target="_blank"
                  >
                    <FaQuora className="icon" style={{ fontSize: 35 }} />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <h2 className="form-text">Quick Contact</h2>

                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <div className="row">
                    <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        placeholder="First Name"
                        id="fname"
                        aria-describedby="emailHelp"
                        name="first_name"
                        value={userDetails.first_name}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {validator.current.message(
                        "first_name",
                        userDetails.first_name,
                        "required|String|max:60",
                        { className: "text-danger" }
                      )}
                    </div>
                    <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Last Name"
                        id="fname"
                        aria-describedby="emailHelp"
                        name="last_name"
                        value={userDetails.last_name}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {validator.current.message(
                        "last_name",
                        userDetails.last_name,
                        "required|String|max:60",
                        { className: "text-danger" }
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-4  col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Email"
                        id="fname"
                        aria-describedby="emailHelp"
                        name="vendor_email"
                        value={userDetails.vendor_email}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {validator.current.message(
                        "vendor_email",
                        userDetails.vendor_email,
                        "required|email",
                        { className: "text-danger" }
                      )}
                    </div>
                    <div className="mb-4  col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="number"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Phone"
                        id="fname"
                        aria-describedby="emailHelp"
                        name="vendor_phone"
                        value={userDetails.vendor_phone}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {validator.current.message(
                        "vendor_phone",
                        userDetails.vendor_phone,
                        "required|min:10|max:12",
                        { className: "text-danger" }
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-4  col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Business Name"
                        id="Business"
                        aria-describedby="emailHelp"
                        name="business_name"
                        value={userDetails.business_name}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {validator.current.message(
                        "first_name",
                        userDetails.business_name,
                        "required|max:60",
                        { className: "text-danger" }
                      )}
                    </div>
                    <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Age"
                        id="fname"
                        aria-describedby="emailHelp"
                        name="business_age"
                        value={userDetails.business_age}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      {validator.current.message(
                        "business_age",
                        userDetails.business_age,
                        "required",
                        { className: "text-danger" }
                      )}
                    </div>

                    <div className="mb-4 col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Message"
                        name="message"
                        value={userDetails.message}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                      ></textarea>
                      {validator.current.message(
                        "message",
                        userDetails.message,
                        "required|max:250",
                        { className: "text-danger" }
                      )}
                    </div>
                  </div>

                  <button type="submit" className=" form-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default FormSection;
