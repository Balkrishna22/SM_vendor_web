import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Assests/Images/logo.svg";
import {RiUserShared2Line} from "react-icons/ri"

export const Header = () => {


  return (
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
            <Nav.Link as={Link} to="/feature">
              Feature
            </Nav.Link>
            {/* <Nav.Link as={Link} to="" className="text-center"> */}
              <a href="https://shadimasters.com" target="blank"><RiUserShared2Line className="userhead"/></a>
            {/* </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

//export default Header;
