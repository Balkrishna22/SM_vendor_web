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
  const [marketVendorDetails, setMarketVendor] = useState({
    first_name: "",
    last_name: "",
    market_business_name: "",
    market_email: "",
    market_phone: "",
    market_city: "",
    market_state: "",
    market_business_type: "",
  });
  const [allCities, setAllCities] = useState("");
  const [allStates, setAllStates] = useState([]);
  const [busineesList, setBusineesList] = useState([]);
  const [marketList, setMarketList] = useState([]);
  const [ServiceList, setServiceList] = useState([]);
  const [formType, setFormType] = useState({ type: "" });

  const [, forceUpdate] = useState("");

  const validator = useRef(
    new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
  );

  const handleFormSubmit = () => {
    const formValid = validator.current.allValid();
    // if (formValid) {
      let postData = {
        ...userDetails,
        business_type: userDetails.business_type.value,
      };
      authServices.register(postData).then((res) => {
        if (res.status === true) {
          // Storage.set("auth", JSON.stringify(res.data));
          if (res.data.profile_completed) {
            Storage.set("auth", JSON.stringify(res.data));
            toast.success("vendor will redirect to vendor admin for login");
            closeHandle(false)
            // window.location.href = "/http://localhost:3000";
          } else {
            Storage.set("auth", JSON.stringify(res.data));
            toast.success(
              "vendor will redirect to vendor admin for Complete Profile"
            );
            closeHandle(false)
            // window.location.href = "/complete-profile";
          }
        } else {
          toast.error(res.message);
        }
      });
    // } else {
    //   validator.current.showMessages();
    // }
  };

  useEffect(() => {
    allState();
    getItemBusinessList();
    getItemMarketList();
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
        let arry = [];
        res.data.map((list) => {
          arry.push({ value: list._id, label: list.business_name });
        });
        setBusineesList(arry);
      }
    });
  };
  const getItemMarketList = (id) => {
    eventService.get_market_business().then((res) => {
      if (res.status === true) {
        let arry = [];
        res.data.map((list) => {
          arry.push({ value: list._id, label: list.market_business_name });
        });
        setMarketList(arry);
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
      business_type: e,
    });
    getServiceList(e.value);
    setFormType({ type: "service" });
  };
  const onChangeMarket = (e) => {
    setMarketVendor({
      ...marketVendorDetails,
      market_business_type: e,
    });
    setFormType({ type: "market" });
  };
  const handleMarketSubmit = () => {
    const formValid = validator.current.allValid();

    let postData = {
      ...marketVendorDetails,
      market_business_type: marketVendorDetails.market_business_type.value,
    };
    authServices.register_market(postData).then((res) => {
      if (res.status === true) {
        // Storage.set("auth", JSON.stringify(res.data));
        if (res.data.profile_completed) {
          Storage.set("auth", JSON.stringify(res.data));
          toast.success("vendor will redirect to vendor admin for login");
          closeHandle(false)
          // window.location.href = "/http://localhost:3000";
        } else {
          Storage.set("auth", JSON.stringify(res.data));
          toast.success(
            "vendor will redirect to vendor admin for Complete Profile"
          );
          closeHandle(false)
          // window.location.href = "/complete-profile";
        }
      } else {
        toast.error(res.message);
      }
    });
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
            <div className="col-lg-6 col-md-6 col-sm-12 M-head">
              <h4 className="M-f-heading">Service Vendor</h4>
              <hr></hr>
              <ul className="M-f-ul">
                {busineesList &&
                  busineesList.map((elm) => (
                    <li onClick={() => onSelect(elm)}>{elm.label}</li>
                  ))}
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 M-head">
              <h4 className="M-f-heading">Product Vendor</h4>
              <hr className=""></hr>
              <ul className="M-f-ul">
                {marketList &&
                  marketList.map((elm) => (
                    <li onClick={() => onChangeMarket(elm)}>{elm.label}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* <span onClick={() => setShow(false)}><FaTimes/></span> */}
              {formType.type === "service" ? (
                <div className="M-form">
                  <h4 className="M-f-heading">Service Vendor</h4>
                  <hr></hr>
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
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          placeholder="business_type"
                          id="business_type"
                          aria-describedby="business_type"
                          name="business_type"
                          value={userDetails.business_type.label}
                          disabled
                        />
                        {console.log(
                          userDetails.business_type,
                          "userDetails.business_type"
                        )}
                        {/* <Select
                        className="custmSelect_lt"
                        placeholder="Select bussiness"
                        styles={getCustomstyle(100)}
                        onChange={(e) => onSelect(e)}
                        options={busineesList}
                      /> */}
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
              ) : formType.type === "market" ? (
                <div className="M-form">
                  <h4 className="M-f-heading">Market Vendor</h4>
                  <hr></hr>
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
                          value={marketVendorDetails.first_name}
                          onChange={(e) =>
                            setMarketVendor({
                              ...marketVendorDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        {validator.current.message(
                          "first_name",
                          marketVendorDetails.first_name,
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
                          value={marketVendorDetails.last_name}
                          onChange={(e) =>
                            setMarketVendor({
                              ...marketVendorDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        {validator.current.message(
                          "last_name",
                          marketVendorDetails.last_name,
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
                          name="market_business_name"
                          value={marketVendorDetails.market_business_name}
                          onChange={(e) =>
                            setMarketVendor({
                              ...marketVendorDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        {validator.current.message(
                          "required|max:60",
                          marketVendorDetails.market_business_name,
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
                          name="market_email"
                          value={marketVendorDetails.market_email}
                          onChange={(e) =>
                            setMarketVendor({
                              ...marketVendorDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        {validator.current.message(
                          "vendor_email",
                          marketVendorDetails.market_email,
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
                          name="market_phone"
                          value={marketVendorDetails.market_phone}
                          onChange={(e) =>
                            setMarketVendor({
                              ...marketVendorDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        {validator.current.message(
                          "market_phone",
                          marketVendorDetails.market_phone,
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
                            setMarketVendor({
                              ...marketVendorDetails,
                              market_state: e.value,
                            })
                          }
                          styles={getCustomstyle(100)}
                        />
                        {validator.current.message(
                          "state",
                          marketVendorDetails.market_state,
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
                            setMarketVendor({
                              ...marketVendorDetails,
                              market_city: e.value,
                            })
                          }
                          options={allCities}
                        />
                        {validator.current.message(
                          "Select City",
                          marketVendorDetails.market_city,
                          "required",
                          { className: "text-danger" }
                        )}
                      </div>
                      <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                        {/* <select className="form-select form-control"> */}
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          placeholder="business_type"
                          id="business_type"
                          aria-describedby="business_type"
                          name="business_type"
                          value={marketVendorDetails.market_business_type.label}
                          disabled
                        />

                        {/* <Select
                        className="custmSelect_lt"
                        placeholder="Select bussiness"
                        styles={getCustomstyle(100)}
                        onChange={(e) => onSelect(e)}
                        options={busineesList}
                      /> */}
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
                      onClick={(e) => handleMarketSubmit(e)}
                      className=" Mform-btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
