import React from 'react'
import logo from "../Assests/Images/logo.svg"

export default function Footer() {
    return (
       <footer>
           <div className="container-fluid">
               <div className="row footer-row">

                   <div className="col-12">
                        <hr className="mb-5"/>
                   </div>
               
                   <div className="col-lg-4 col-md-4 col-sm-12">
                   
                       <div className="about-section">
                            <h5 className="footer-h5">About</h5>
                            {/* <img src={logo} className="img-fluid footerlogo"/> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor et risus et venenatis. Etiam nec nunc sagittis, placerat nulla nec, tincidunt turpis. Nulla facilisi. Donec eget tellus vel ligula convallis volutpat. Pellentesque quam dolor, molestie sed malesuada id, dapibus placerat nulla. Nulla vel rutrum magna, id tempor lacus. </p>
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
                        <hr className="mt-5"/>
                        <p className="text-center">
                        ©2022 ShadiMaesters
                        </p>
                   </div>


                   </div>
               </div>
           {/* </div> */}
           

       </footer>
    )
}
