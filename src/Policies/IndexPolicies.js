import React from 'react'
import CookiePolicy from './CookiePolicy';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnAndRefundPolicy from './ReturnAndRefundPolicy';
import TermsAndConditions from './TermsAndConditions';
import Eula from './Eula';
import './policyStyle.css'
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {FaTimes} from "react-icons/fa"

export default function IndexPolicies() {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <>
            <div className=" container-fluid">
                <Nav className='border-bottom w-100 text-center align-items-center bg-white position-sticky' style={{ top: 0, zIndex: 1, padding: '0rem 4.5rem' }}
                    activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    {/* <Nav.Item>
                        <button className='btn btn-danger' onClick={goToPreviousPath}>Go Back</button>
                    </Nav.Item> */}
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
                        <button className=' btn-policies' onClick={goToPreviousPath}><FaTimes/></button>
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
        </>
    )
}
