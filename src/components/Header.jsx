import React, { useState } from "react";
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <div className="navbar-brand">
            <Link to="/" style={{ color: "white" }}>
              GhumloJi
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <div className="dropdown-item myc">
                  <Link to="/destinations">Destinations</Link>
                </div>
                <div className="dropdown-item myc">
                  <Link to="/upcomingtours">Up Comming Tours</Link>
                </div>
                <div className="dropdown-item myc">
                  <Link to="/">Hotels</Link>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button className="" variant="outline-light">
            <Link style={{ color: "white" }} to="registrationvalidation">
              Register Now
            </Link>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
