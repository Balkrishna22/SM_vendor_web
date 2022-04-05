import React from 'react'
import CookiePolicy from './CookiePolicy';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnAndRefundPolicy from './ReturnAndRefundPolicy';
import TermsAndConditions from './TermsAndConditions';
import Eula from './Eula';
import './policyStyle.css'
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import Logo from "../Assests/Images/logo.svg";
import { RiUserShared2Line } from "react-icons/ri"
import { Link } from "react-router-dom";
import { RiUserLine } from 'react-icons/ri'
import { FaTimes } from "react-icons/fa"

export default function IndexPolicies({ show, close }) {

    return (
        <>
            <Modal show={show} size="xxl">
                <Container fluid>

                    <Navbar bg="" expand="lg">

                        <Navbar.Brand as={Link} to="/">
                            <img src={Logo} alt="logo" />
                        </Navbar.Brand>
                        {/* here we go for next */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto naveLink">
                                <Nav.Link className="active" as={Link} to="/">
                                    Home
                                </Nav.Link>
                                {/* <Nav.Link as={Link} to="/feature">
                                            Feature
                                            </Nav.Link> */}
                                <a href="http://192.168.1.153:3000/home" target="blank" className="userhead "><RiUserLine /> Sign In</a>



                                {/* <Nav.Link as={Link} to="" className="text-center"> */}
                                <a href="https://shadimasters.com" target="blank" className="userhead "><RiUserShared2Line /> User Website</a>
                                {/* </Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>

                    <Modal.Body>
                        <div className=" container-fluid">
                            {console.log('came on the ')}
                            <Nav className='border-bottom w-100 text-center align-items-center bg-white position-sticky' style={{ top: 0, zIndex: 1, padding: '0rem 4.5rem' }}
                                activeKey="/home"
                            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                            >

                                <Nav.Item>
                                    <Nav.Link className='py-3 text-dark fw-bold' href="#CookiePolicy">Cookie Policy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='py-3 text-dark fw-bold' href="#Disclaimer">Disclaimer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='py-3 text-dark fw-bold' href="#PrivacyPolicy">Privacy Policy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='py-3 text-dark fw-bold' href="#ReturnAndRefundPolicy">Return and Refund Policy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='py-3 text-dark fw-bold' href="#TermsAndConditions">Terms and Conditions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='py-3 text-dark fw-bold' href="#Eula">Eula</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="ml-auto">
                                    <button className=' btn-policies' onClick={() => close(false)}><FaTimes /></button>
                                </Nav.Item>

                            </Nav>
                            <div className='row Guides-r pt-0'>

                                <div className='policyHolder' id='CookiePolicy'>
                                    <CookiePolicy />
                                </div>
                                <div className='policyHolder' id='Disclaimer'>
                                    <Disclaimer />
                                </div>
                                <div className='policyHolder' id='PrivacyPolicy'>
                                    <PrivacyPolicy />
                                </div>
                                <div className='policyHolder' id='ReturnAndRefundPolicy'>
                                    <ReturnAndRefundPolicy />
                                </div>
                                <div className='policyHolder' id='TermsAndConditions'>
                                    <TermsAndConditions />
                                </div>
                                <div className='policyHolder' id='Eula'>
                                    <Eula />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Container>
            </Modal>

        </>
    )
}
