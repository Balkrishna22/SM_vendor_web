import React, { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleReactValidator from "simple-react-validator";
import { useHistory, Link } from "react-router-dom";
import Storage from "../../Storage/Storage";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";
import { getCustomstyle } from "../../Services/helperConst";
import eventService from "../../Services/eventServices";
import authServices from "../../Services/authServices";

export const SignupModal = ({ closeHandle, openModal }) => {
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
  const [allCities, setAllCities] = useState("");
  const [allStates, setAllStates] = useState([]);
  const [busineesList, setBusineesList] = useState([]);
  const [ServiceList, setServiceList] = useState([]);

  const [, forceUpdate] = useState("");

  const validator = useRef(
    new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
  );

  const handleFormSubmit = () => {
    const formValid = validator.current.allValid();
    if (formValid) {
      authServices.register(userDetails).then((res) => {
        if (res.status === true) {
          // Storage.set("auth", JSON.stringify(res.data));
          if (res.data.profile_completed) {
            Storage.set("auth", JSON.stringify(res.data));
            toast.success("vendor will redirect to vendor admin for login");
            // window.location.href = "/http://localhost:3000";
          } else {
            Storage.set("auth", JSON.stringify(res.data));
            toast.success(
              "vendor will redirect to vendor admin for Complete Profile"
            );
            // window.location.href = "/complete-profile";
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
      .catch((error) => {});
  };

  const getItemBusinessList = (id) => {
    eventService.get_business().then((res) => {
      if (res.status === true) {
        let arry = [{ value: "", label: "All Business" }];
        res.data.map((list) => {
          arry.push({ value: list._id, label: list.business_name });
        });
        setBusineesList(arry);
      }
    });
  };

  const getServiceList = (id) => {
    let param = {};
    if (id) {
      param["business_type"] = id;
    }

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
    <Modal
      show={openModal}
      size="xl"
      onHide={() => closeHandle(false)}
      dialogClassName="modal-100w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 M-head" >
              <h4 className="M-f-heading">Service Vendor</h4>
              <hr></hr>
              <ul className="M-f-ul">
                  <li>Makeup Artist</li>
                  <li>Photographer</li>
                  <li>Cater</li>
                  <li>Decore</li>
                  <li>Artist Manegement</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 M-head">
              <h4 className="M-f-heading">Product Vendor</h4>
              <hr className=""></hr>
              <ul className="M-f-ul">
                  <li>Attire</li>
                  <li>jewellery</li>
                  
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="M-form">
                <h4 className="M-f-heading">Service Vendor</h4>
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
                        "required|max:60",
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
                        "required|max:60",
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
                        "required|max:60",
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
                        "required|email",
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
                    <Link to="/policies" className="m-term">
                      Terms and Conditions
                    </Link>
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
  );
};
