import React, { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleReactValidator from "simple-react-validator";
import { useHistory, Link } from "react-router-dom";
import Storage from "../../Storage/Storage";
import { toast } from "react-toastify";
import Select from "react-select";
import { getCustomstyle } from "../../Services/helperConst";
import eventService from "../../Services/eventServices";
import authServices from "../../Services/authServices";

export const SignupModal = ({ closeHandle, openModal, setOpenModal }) => {
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
        vendor_password: "",
    });
    const [vendorConfirm, setVendorConfirm] = useState();
    const [marketVendorDetails, setMarketVendor] = useState({
        first_name: "",
        last_name: "",
        market_business_name: "",
        market_email: "",
        market_phone: "",
        market_city: "",
        market_state: "",
        market_business_type: "",
        market_vendor_password: ""
    });
    const [marketConfirm, setMarketConfirm] = useState();

    const [allCities, setAllCities] = useState([]);
    const [allStates, setAllStates] = useState([]);
    const [busineesList, setBusineesList] = useState([]);
    const [marketList, setMarketList] = useState([]);
    const [ServiceList, setServiceList] = useState([]);
    const [formType, setFormType] = useState({ type: "" });

    const [, forceUpdate] = useState("");
    const [, newforceupdate] = useState("");

    const validator1 = useRef(
        new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
    );

    const validator2 = useRef(
        new SimpleReactValidator({ autoForceUpdate: { forceUpdate: newforceupdate } })
    );

    const handleFormSubmit = (e, type) => {
        e.preventDefault();
        if (type === "service") {
            const formValid = validator1.current.allValid();
            if (formValid) {
                let postData = {
                    first_name: userDetails.first_name,
                    last_name: userDetails.last_name,
                    business_name: userDetails.business_name,
                    business_type: userDetails.business_type,
                    vendor_service: userDetails.vendor_service,
                    vendor_email: userDetails.vendor_email,
                    vendor_phone: userDetails.vendor_phone,
                    vendor_city: userDetails.vendor_city?.value,
                    vendor_state: userDetails.vendor_state?.value,
                    vendor_password: userDetails.vendor_password,
                    business_type: userDetails.business_type.value,
                    surrounding_area: userDetails.surrounding_area
                };
                authServices.register(postData).then((res) => {
                    if (res.status === true) {

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
                        setVendorConfirm();
                        setUserDetails({
                            first_name: "",
                            last_name: "",
                            business_name: "",
                            business_type: "",
                            vendor_service: "",
                            vendor_email: "",
                            vendor_phone: "",
                            vendor_city: "",
                            vendor_state: "",
                            vendor_password: "",
                            surrounding_area: ""
                        })
                        getItemBusinessList();
                        setFormType({ type: "" })
                    } else {
                        toast.error(res.message);
                    }
                });
            } else {
                validator1.current.showMessages();
            }
        }
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

    // useEffect(() => {
    //     getCity();
    // }, [userDetails.vendor_state]);

    useEffect(() => {
        getServiceList();
    }, [userDetails.vendor_service]);


    const getCity = (value) => {
        let param = {
            state: value,
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
    const onSelect = (e, i) => {

        let array = [...busineesList];
        array.filter((item, k) => {
            if (k === i) {
                item["is_active"] = true;
            } else {
                item["is_active"] = false;
            }
        })
        setBusineesList(array);

        let marketarray = [...marketList];
        marketarray.map((item) => { item.is_active = false })
        setMarketList(marketarray);

        setUserDetails({
            ...userDetails,
            business_type: e,
        });
        getServiceList(e.value);
        setFormType({ type: "service" });
    };
    const onChangeMarket = (e, i) => {
        let array = [...marketList];
        array.filter((item, k) => {
            if (k === i) {
                item["is_active"] = true;
            } else {
                item["is_active"] = false;
            }
        })
        let businessarray = [...busineesList];
        businessarray.map((item) => { item.is_active = false })
        setBusineesList(businessarray);
        setMarketList(array);
        setMarketVendor({
            ...marketVendorDetails,
            market_business_type: e,
        });
        setFormType({ type: "market" });
    };


    const handleMarketSubmit = (e, type) => {
        e.preventDefault();
        if (type === "product") {
            const formValid = validator2.current.allValid();
            let postData = {
                first_name: marketVendorDetails.first_name,
                last_name: marketVendorDetails.last_name,
                market_business_name: marketVendorDetails.market_business_name,
                market_email: marketVendorDetails.market_email,
                market_phone: marketVendorDetails.market_phone,
                market_city: marketVendorDetails.market_city?.value,
                market_state: marketVendorDetails.market_state?.value,
                market_vendor_password: marketVendorDetails.market_vendor_password,
                market_business_type: marketVendorDetails.market_business_type.value,
                surrounding_area: marketVendorDetails?.surrounding_area
            };
            if (formValid) {
                authServices.register_market(postData).then((res) => {
                    if (res.status === true) {
                        // Storage.set("auth", JSON.stringify(res.data));
                        if (res.data.profile_completed) {
                            Storage.set("auth", JSON.stringify(res.data));
                            toast.success("vendor will redirect to vendor admin for login");
                            setOpenModal(false);
                        } else {
                            Storage.set("auth", JSON.stringify(res.data));
                            toast.success(
                                "vendor will redirect to vendor admin for Complete Profile"
                            );
                            setOpenModal(false);
                        }
                        setMarketConfirm();
                        setMarketVendor({
                            first_name: "",
                            last_name: "",
                            market_business_name: "",
                            market_email: "",
                            market_phone: "",
                            market_city: "",
                            market_state: "",
                            market_business_type: "",
                            market_vendor_password: "",
                            surrounding_area: ""
                        })
                        setFormType({ type: "" })
                        getItemMarketList();
                    } else {
                        toast.error(res.message);
                    }
                });
            } else {
                validator2.current.showMessages();
            }
        }
    };

    function closeHandle() {
        setOpenModal(false);
        setVendorConfirm();
        setMarketConfirm();
        setUserDetails({
            first_name: "",
            last_name: "",
            business_name: "",
            business_type: "",
            vendor_service: "",
            vendor_email: "",
            vendor_phone: "",
            vendor_city: "",
            vendor_state: "",
            vendor_password: "",
            surrounding_area: ""
        })
        setMarketVendor({
            first_name: "",
            last_name: "",
            market_business_name: "",
            market_email: "",
            market_phone: "",
            market_city: "",
            market_state: "",
            market_business_type: "",
            market_vendor_password: "",
            surrounding_area: ""
        })
        setFormType({ type: "" })
        getItemBusinessList();
        getItemMarketList();
    }

    const productStateHandler = (e) => {
        getCity(e.value)
        setUserDetails({
            ...userDetails,
            vendor_state: e,
            vendor_city: ""
        })
    }

    const serviceStateHandler = (e) => {
        getCity(e.value)
        setMarketVendor({
            ...marketVendorDetails,
            market_state: e,
            market_city: ""
        })
    }


    return (
        <Modal
            show={openModal}
            size="xl"
            onHide={() => closeHandle()}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
                <h2 className="model-heading">Select Business Type</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 M-head">
                            <h4 className="M-f-heading">Service Vendor</h4>
                            <hr></hr>
                            <ul className="M-f-ul">
                                {busineesList &&
                                    busineesList.map((elm, key) => (
                                        <li key={key} className={elm.is_active === true ? "active-type" : ""} onClick={() => onSelect(elm, key)}>{elm.label}</li>
                                    ))}
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 M-head">
                            <h4 className="M-f-heading">Product Vendor</h4>
                            <hr className=""></hr>
                            <ul className="M-f-ul">
                                {marketList &&
                                    marketList.map((elm, key) => (
                                        <li key={key} className={elm.is_active === true ? "active-type" : ""} onClick={() => onChangeMarket(elm, key)}>{elm.label}</li>
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
                                    <form autocomplete="off" onSubmit={(e) => handleFormSubmit(e, "service")}>
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
                                                {validator1.current.message(
                                                    "first_name",
                                                    userDetails.first_name,
                                                    "required|alpha_space|max:60",
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
                                                {validator1.current.message(
                                                    "last_name",
                                                    userDetails.last_name,
                                                    "required|alpha_space|max:60",
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
                                                {validator1.current.message(
                                                    "Business Name",
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
                                                {validator1.current.message(
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
                                                    min="0"
                                                />
                                                {validator1.current.message(
                                                    "vendor_phone",
                                                    userDetails.vendor_phone,
                                                    "required|min:10",
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                {/* <select className="form-select form-control"> */}
                                                <Select
                                                    className="custmSelect_lt"
                                                    placeholder="Select state..."
                                                    options={allStates}
                                                    onChange={(e) => productStateHandler(e)}
                                                    value={userDetails.vendor_state}
                                                    styles={getCustomstyle(100)}
                                                />
                                                {validator1.current.message(
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
                                                            vendor_city: e,
                                                        })
                                                    }
                                                    value={userDetails.vendor_city}
                                                    options={allCities}
                                                />
                                                {validator1.current.message(
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
                                                    placeholder="Surrounding Area"
                                                    name="business_type"
                                                    value={userDetails.surrounding_area}
                                                    onChange={(e) =>
                                                        setUserDetails({
                                                            ...userDetails,
                                                            surrounding_area: e.target.value,
                                                        })
                                                    }
                                                />
                                                {validator1.current.message(
                                                    "Area",
                                                    userDetails.surrounding_area,
                                                    "required",
                                                    { className: "text-danger" }
                                                )}
                                            </div>

                                        </div>
                                        <div className="row">

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
                                                    readOnly
                                                />
                                                {validator1.current.message(
                                                    "Select bussiness",
                                                    userDetails.business_type,
                                                    "required",
                                                    { className: "text-danger" }
                                                )}

                                            </div>

                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
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
                                                {validator1.current.message(
                                                    "Select Services",
                                                    userDetails.vendor_service,
                                                    "required",
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="mb-4 col-6">
                                                <input type="password" class="form-control" id="pwd" placeholder="password" name="pswd"
                                                    onChange={(e) => setUserDetails({
                                                        ...userDetails,
                                                        vendor_password: e.target.value
                                                    })}
                                                />
                                                {validator1.current.message(
                                                    "Password",
                                                    userDetails.vendor_password,
                                                    "required",
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                            <div className="mb-4 col-6">
                                                <input type="password" class="form-control" id="pwd" placeholder="confirm-password" name="pswd" onChange={(e) => setVendorConfirm(e.target.value)}
                                                />
                                                {validator1.current.message(
                                                    "Confirm Password",
                                                    vendorConfirm,
                                                    `required|in:${userDetails.vendor_password}`,
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                        </div>


                                        <p>
                                            By clicking the submit button below you are accepting
                                            <Link to="/policies" className="m-term">
                                                Terms and Conditions
                                            </Link>
                                        </p>

                                        <button
                                            type="submit"
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
                                    <form autoComplete="off" onSubmit={(e) => handleMarketSubmit(e, "product")}>
                                        <div className="row">
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                <input
                                                    type="text"
                                                    className="form-control"

                                                    autocomplete="new-password"
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
                                                {validator2.current.message(
                                                    "first_name",
                                                    marketVendorDetails.first_name,
                                                    "required|alpha_space|max:60",
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    autocomplete="new-password"
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
                                                {validator2.current.message(
                                                    "last_name",
                                                    marketVendorDetails.last_name,
                                                    "required|alpha_space|max:60",
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    autocomplete="new-password"
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
                                                {validator2.current.message(
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
                                                    autocomplete="new-password"
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
                                                {validator2.current.message(
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
                                                    autocomplete="new-password"
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
                                                    min="0"
                                                />
                                                {validator2.current.message(
                                                    "market_phone",
                                                    marketVendorDetails.market_phone,
                                                    "required|min:10",
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                {/* <select className="form-select form-control"> */}
                                                <Select
                                                    className="custmSelect_lt"
                                                    placeholder="Select state..."
                                                    options={allStates}
                                                    onChange={(e) => serviceStateHandler(e)}
                                                    value={marketVendorDetails.market_state}
                                                    styles={getCustomstyle(100)}
                                                />
                                                {validator2.current.message(
                                                    "state",
                                                    marketVendorDetails.market_state,
                                                    "required",
                                                    { className: "text-danger mt-2" }
                                                )}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                {/* <select className="form-select form-control"> */}
                                                <Select
                                                    className="custmSelect_lt"
                                                    placeholder="Select City"
                                                    styles={getCustomstyle(100)}
                                                    onChange={(e) =>
                                                        setMarketVendor({
                                                            ...marketVendorDetails,
                                                            market_city: e,
                                                        })
                                                    }
                                                    value={marketVendorDetails.market_city}
                                                    options={allCities}
                                                />
                                                {validator2.current.message(
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
                                                    placeholder="Surrounding Area"
                                                    name="business_type"
                                                    value={marketVendorDetails.surrounding_area}
                                                    onChange={(e) =>
                                                        setMarketVendor({
                                                            ...marketVendorDetails,
                                                            surrounding_area: e.target.value,
                                                        })
                                                    }
                                                />
                                                {validator2.current.message(
                                                    "Area",
                                                    marketVendorDetails.surrounding_area,
                                                    "required",
                                                    { className: "text-danger" }
                                                )}
                                            </div>


                                        </div>



                                        <div className="row">
                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-12">
                                                {/* <select className="form-select form-control"> */}
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    autocomplete="new-password"
                                                    placeholder="business_type"
                                                    id="business_type"
                                                    aria-describedby="business_type"
                                                    name="business_type"
                                                    value={marketVendorDetails.market_business_type.label}
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-4 col-6">
                                                <input type="password" class="form-control" id="pwd" placeholder="password" name="pswd"
                                                    onChange={(e) => setMarketVendor({
                                                        ...marketVendorDetails,
                                                        market_vendor_password: e.target.value
                                                    })}
                                                    autocomplete="new-password"
                                                />
                                                {validator2.current.message(
                                                    "Password",
                                                    marketVendorDetails.market_vendor_password,
                                                    "required",
                                                    { className: "text-danger" }
                                                )}
                                            </div>

                                            <div className="mb-4 col-6">
                                                <input type="password" class="form-control" id="pwd" placeholder="confirm-password" name="pswd" onChange={(e) => setMarketConfirm(e.target.value)}
                                                    autocomplete="new-password" />
                                                {validator2.current.message(
                                                    "Password",
                                                    marketConfirm,
                                                    `required|in:${marketVendorDetails.market_vendor_password}`,
                                                    { className: "text-danger" }
                                                )}
                                            </div>
                                        </div>

                                        <p>
                                            By clicking the submit button below you are accepting
                                            <Link to="/policies" className="m-term">
                                                &nbsp; Terms and Conditions
                                            </Link>
                                        </p>

                                        <button
                                            type="submit"
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
