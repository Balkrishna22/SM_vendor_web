import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Assests/Images/logo.svg";
import { RiUserShared2Line } from "react-icons/ri"
import { RiUserAddLine } from 'react-icons/ri'
import { RiUserLine } from 'react-icons/ri'
import { red } from "@material-ui/core/colors";
import { SignupModal } from "./Modal/SignupModal";

export const Header = () => {

  const [show, setShow] = useState(false);
  const handelClose = () => {
    setShow(false)
  }

  return (
    <>
      <Navbar bg="" expand="lg">
        <Container fluid>
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

              <a javascriptVoid="" className="userhead " style={{ cursor: 'pointer' }} onClick={() => setShow(true)}> <RiUserAddLine /> Sign Up</a>

              {/* <Nav.Link as={Link} to="" className="text-center"> */}
              <a href="https://shadimasters.com" target="blank" className="userhead "><RiUserShared2Line /> User Website</a>
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SignupModal
        closeHandle={handelClose}
        openModal={show}
        setOpenModal={setShow}
      />
    </>
  );
};

//export default Header;
