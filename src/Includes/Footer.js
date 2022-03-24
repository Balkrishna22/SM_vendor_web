import React from "react";
import logo from "../Assests/Images/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row footer-row">
          <div className="col-12">
            <hr className="mb-5" />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
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
                enquiry.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 Quick">
            <h5 className="footer-h5">Quick Links</h5>
            <p className="Quick-p">Home</p>
            <p>About</p>
            <p>Bookings</p>
            <p>Play My Wedding</p>
            <p>Vendors</p>
            <p>Blog</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 Quick">
            <h5 className="footer-h5">Planning Tools</h5>
            <p className="Quick-p">Wedding Website</p>
            <p>Wedding Invitations</p>
            <p>Checklist</p>
            <p>Guest List</p>
            <p>Budgets</p>
            <p>Vendor Managers</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 Quick">
            <p className="f-last-p">Seating Chart</p>
            <p>Hotel Blocks</p>
            <p>Cost Guide</p>
            <p>Help</p>
          </div>

          <div className="col-12">
            <hr className="mt-5" />
            <p className="text-center">©2022 ShadiMaesters</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
