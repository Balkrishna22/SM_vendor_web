import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/Images/logo.svg";
// import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row footer-row">
          <div className="col-12">
            <hr className="mb-5" />
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="about-section">
              <h5 className="footer-h5">About</h5>
              {/* <img src={logo} className="img-fluid footerlogo"/> */}
              <p>
                We are a wedding professional assisting for planning, design and
                management of weddings. As established wedding planners we are
                offering end to end solutions for weddings. Get the best wedding
                vendors of your city with ShadiMasters. Our expert team is
                equipped with years of experience in wedding planning &
                management. Get in touch with us for any wedding related
                enquiry.
              </p>
              <Link as={Link} className="footer-link" to="/policies">Terms & Condition</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 Quick">
            <h5 className="footer-h5">Quick Links</h5>
            <p className="Quick-p" to="/">Home</p>
            <p>Feature</p>
            <p>Quick Contact</p>
            <p>Know your Best Subscription Plan</p>
            
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 Quick">
            <h5 className="footer-h5">ShadiMasters Exclusive </h5>
            <p className="Quick-p">Management tool</p>
            <p>Business Branding</p>
            <p>Listing Business</p>
            <p>Statistical Reports</p>
            {/* <p>Budgets</p>
            <p>Vendor Managers</p> */}
          </div>
          {/* <div className="col-lg-3 col-md-3 col-sm-12 Quick">
            <p className="f-last-p">Seating Chart</p>
            <p>Hotel Blocks</p>
            <p>Cost Guide</p>
            <p>Help</p>
          </div> */}

          <div className="col-12">
            <hr className="mt-5" />
            <p className="text-center m-0">©2022 ShadiMasters</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
