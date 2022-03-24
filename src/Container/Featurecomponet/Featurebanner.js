
import Featurebannerimg3 from "../../Assests/Images/Featurebannerimg3.png"
import Modal from "react-bootstrap/Modal";
import SimpleReactValidator from "simple-react-validator";
import authServices from "../../Services/authServices";
import { useHistory, Link } from "react-router-dom";
import Storage from "../../Storage/Storage";
import { toast } from "react-toastify";
import Select from "react-select";
import { getCustomstyle } from "../../Services/helperConst";
import React, { useState, useRef, useEffect } from "react";

// import Modal from 'react-bootstrap/Modal'
import eventService from "../../Services/eventServices";

const REACT_APP_API_REDIRECT_URL = process.env.REACT_APP_API_REDIRECT_URL;
const Featurebanner = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    business_type: "",
    vendor_service: "",
    vendor_email: "",
    vendor_phone: "",
    vendor_city: "",
    vendor_state: "",
    // vendor_password: "",
  });
  const [show, setShow] = useState(false);
  const [allCities, setAllCities] = useState("");
  const [allStates, setAllStates] = React.useState([]);
  const [busineesList, setBusineesList] = useState("");
  const [ServiceList, setServiceList] = useState("");

  const [Formshow, setFormShow] = useState(false);

  const [, forceUpdate] = useState("");
  console.log("userDetails--->", userDetails);

  let history = useHistory();

  const validator = useRef(
    new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
  );

  const handleFormSubmit = () => {
    let userType = userDetails.credential;

    const formValid = validator.current.allValid();
    if (formValid) {
      authServices.register(userDetails).then((res) => {
        if (res.status === true) {
          // Storage.set("auth", JSON.stringify(res.data));
          if (res.data.profile_completed) {
            Storage.set("auth", JSON.stringify(res.data));

            window.location.href = "/http://localhost:3000";
          } else {
            Storage.set("auth", JSON.stringify(res.data));
            window.location.href = "/complete-profile";
          }
        } else {
          toast.error(res.message);
        }
      });
    } else {
      validator.current.showMessages();
    }
  };

  useEffect(() => {
    allState();
    getItemBusinessList();
  }, []);
  const allState = () => {
    eventService
      .get_states()
      .then((res) => {
        if (res.status) {
          let option = [];
          res.data.map((elm) => {
            option.push({ label: elm.name, value: elm.name });
          });
          setAllStates(option);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCity();
  }, [userDetails.vendor_state]);
  useEffect(() => {
    getServiceList();
  }, [userDetails.vendor_service]);

  const getCity = () => {
    let param = {
      state: userDetails.vendor_state,
    };
    eventService
      .get_city(param)
      .then((res) => {
        if (res.status) {
          let option = [];
          res.data.map((elm) => {
            option.push({ label: elm.name, value: elm.name });
          });
          setAllCities(option);
        }
      })
      .catch((error) => { });
  };

  const getItemBusinessList = (id) => {
    // let postData = {
    //   business_type: id ? id : "",
    // };
    eventService.get_business().then((res) => {
      if (res.status === true) {
        let arry = [{ value: "", label: "All Business" }];
        res.data.map((list) => {
          arry.push({ value: list._id, label: list.business_name });
        });
        setBusineesList(arry);
        // console.log(arry.value);
      }
    });
  };

  const getServiceList = (id) => {
    let param = {
      business_type: id,
    };

    eventService.get_services(param).then((res) => {
      if (res.status === true) {
        let arry = [];
        res.data.map((list) => {
          arry.push({ value: list._id, label: list.service_name });
        });
        setServiceList(arry);
      } else {
        toast.error(res.message);
      }
    });
  };
  const onSelect = (e) => {
    setUserDetails({
      ...userDetails,
      business_type: e.value,
    });
    getServiceList(e.value);
  };






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
              {/* <button type="button" className=" header-btn" >
                SIGN UP
              </button> */}
              <button
                type="button"
                className=" header-btn ml-2"
                onClick={() => setShow(true)}
              >
                SIGN UP
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12  " >
            <img src={Featurebannerimg3} alt='...' className="img-fluid Featurebannerimg3" />
          </div>
        </div>
      </div>


      {/* Model */}

      <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-lg-12 col-md-6 col-sm-12 ">
                <div className="mainmodel-box">
                  <h4 className="text-center">Wedding Services And Product</h4>
                  <hr className="w-50 " />

                  <div className="M-contain ">
                    <ul className="d-flex flex-wrap">
                    <li onClick={() => setFormShow(true)}> Wedding Venues</li>
                    <li onClick={() => setFormShow(true)}>Wedding Planner</li>
                    <li onClick={() => setFormShow(true)}>Decor</li>
                    <li onClick={() => setFormShow(true)}>Catering Services</li>
                    <li onClick={() => setFormShow(true)}>Artist Management</li>
                    <li onClick={() => setFormShow(true)}>Photographer</li>
                    <li onClick={() => setFormShow(true)}>Jewellery</li>
                    <li onClick={() => setFormShow(true)}>Boutique/Attire</li>
                    <li onClick={() => setFormShow(true)}>Gift & Gallery</li>
                    <li onClick={() => setFormShow(true)}>Makeup Artist </li>
                    </ul>
                    
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="mainmodel-box">
                  <h4 className="text-center">Wedding Product</h4>
                  <hr className="w-50 " />

                  <div className="M-contain ">
                    <ul className="d-flex flex-wrap">
                    <li onClick={() => setFormShow(true)}>Jewellery</li>
                    <li onClick={() => setFormShow(true)}>Boutique/Attire</li>
                    <li onClick={() => setFormShow(true)}>Gift & Gallery</li>
                    <li onClick={() => setFormShow(true)}>Makeup Artist </li>
                    </ul>
                  </div>

                </div>
              </div> */}

              <div className="col-lg-12">
                <div className="M-form">
                  <h4 className="M-f-heading">SIGN UP</h4>
                  <hr></hr>

                  {/* <span onClick={() => setShow(false)}><FaTimes/></span> */}

                  <form>
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
                          "required",
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
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
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
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                      <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
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
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4  col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="number"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Phone"
                          id="Phone"
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
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                      <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                        {/* <select className="form-select form-control"> */}
                        <Select
                          className="custmSelect_lt"
                          placeholder="Select state..."
                          value={userDetails.vendor_state}
                          options={allStates}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              vendor_state: e.value,
                            })
                          }
                          styles={getCustomstyle(100)}
                        />
                        {validator.current.message(
                          "state",
                          userDetails.vendor_state,
                          "required",
                          { className: "text-danger mt-2" }
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4  col-lg-6 col-md-6 col-sm-12">
                        {/* <select className="form-select form-control"> */}
                        <Select
                          className="custmSelect_lt"
                          placeholder="Select City"
                          styles={getCustomstyle(100)}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              vendor_city: e.value,
                            })
                          }
                          options={allCities}
                        />
                        {validator.current.message(
                          "Select City",
                          userDetails.vendor_city,
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                      <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                        {/* <select className="form-select form-control"> */}
                        <Select
                          className="custmSelect_lt"
                          placeholder="Select bussiness"
                          styles={getCustomstyle(100)}
                          onChange={(e) => onSelect(e)}
                          options={busineesList}
                        />
                        {validator.current.message(
                          "Select bussiness",
                          userDetails.business_type,
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4 col-6">
                        <Select
                          className="custmSelect_lt"
                          placeholder="Select Services"
                          styles={getCustomstyle(100)}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              vendor_service: e.value,
                            })
                          }
                          options={ServiceList}
                        />
                        {validator.current.message(
                          "Select Services",
                          userDetails.vendor_service,
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                    </div>
                    <p>
                      By clicking the submit button below you are accepting{" "}
                      <Link to='/policies' className="m-term">Terms and Conditions</Link>
                    </p>

                    <button
                      type="button"
                      onClick={(e) => handleFormSubmit(e)}
                      className=" Mform-btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>



    </>
  );
};

export default Featurebanner;