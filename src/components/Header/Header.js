import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  // const [user, setUser] = useState("");
  const user = JSON.parse(localStorage.getItem("result"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [showI, setShowI] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const showDropdownI = (e) => {
    setShowI(!show);
  };
  const hideDropdownI = (e) => {
    setShowI(false);
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      const token = user?.token;
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  return (
    <header>
      <Navbar
        expand="lg"
        collapseOnSelect
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <>
          <Navbar.Brand href="#">
            <img
              src="https://res.cloudinary.com/valodagreat/image/upload/v1647894176/tjkflogo_m7agl4.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Team JKF"
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#action1">HOME</Nav.Link>
              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                title="TEAM JKF"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">ABOUT US</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  OUR VISION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  OUR MISSION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  JOIN THE CRUSADE
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  NEWS UPDATE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="JKF CENTRE"
                show={showI}
                onMouseEnter={showDropdownI}
                onMouseLeave={hideDropdownI}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  THE MAN JKF
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  BEYOND POLITICS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  POLITICAL EVOLUTION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  EKITI SUCCESS STORY
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  WORDS ON MARBLE
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">GALLERY</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">CONTACT</Nav.Link>

              {!user ? (
                <>
                  <Nav.Link href="/login">LOGIN</Nav.Link>
                  <Nav.Link href="/register">JOIN US</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/dashboard">MY ACCOUNT </Nav.Link>
                  <Nav.Link onClick={logout}>LOGOUT</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </header>
  );
}

export default Header;
