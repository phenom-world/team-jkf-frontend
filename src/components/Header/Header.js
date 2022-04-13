import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useNavigate, useLocation, Link } from "react-router-dom";

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
                <NavDropdown.Item href="#action/3.1" className="nav-text">
                  ABOUT US
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-text">
                  OUR VISION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3 " className="nav-text">
                  OUR MISSION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-text">
                  JOIN THE CRUSADE
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="nav-text">
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="nav-text">
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
                <NavDropdown.Item href="#action/3.1" className="nav-text">
                  THE MAN JKF
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-text">
                  BEYOND POLITICS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="nav-text">
                  POLITICAL EVOLUTION
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="nav-text">
                  EKITI SUCCESS STORY
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="nav-text">
                  WORDS ON MARBLE
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="nav-text">
                  GALLERY
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">CONTACT</Nav.Link>

              {!user ? (
                <>
                  <Nav.Link>
                    <Link
                      to="/login"
                      className="navbar-link"
                      style={{ marginLeft: "auto" }}
                    >
                      LOGIN
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to="/register"
                      className="navbar-link"
                      style={{ marginLeft: "auto" }}
                    >
                      JOIN US
                    </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link
                      to="/dashboard"
                      className="navbar-link"
                      style={{ marginLeft: "auto" }}
                    >
                      MY ACCOUNT
                    </Link>
                  </Nav.Link>
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
