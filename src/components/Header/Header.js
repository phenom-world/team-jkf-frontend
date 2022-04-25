import React, { useCallback, useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

function Header() {
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

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
    // window.location.assign("https://teamjkf.org");
    navigate("/login");
  }, [dispatch, navigate]);

  useEffect(() => {
    if (user) {
      const Token = user?.token;
      const decodedToken = decode(Token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location, logout]);

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect bg="dark" variant="dark" sticky="top">
        <>
          <Navbar.Brand href="#">
            <Image
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
              <Nav.Link href="https://teamjkf.org" className="navbar-link">
                HOME
              </Nav.Link>
              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                title="TEAM JKF"
                id="collasible-nav-dropdown"
                className="navbar-link"
              >
                <NavDropdown.Item href="https://teamjkf.org/about" className="nav-text">
                  ABOUT US
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/our-vision" className="nav-text">
                  OUR VISION
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/our-mission" className="nav-text">
                  OUR MISSION
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-text" href="/register">
                  JOIN THE CRUSADE
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/faq" className="nav-text">
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/news-update" className="nav-text">
                  NEWS UPDATE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="JKF CENTRE"
                show={showI}
                onMouseEnter={showDropdownI}
                onMouseLeave={hideDropdownI}
                id="collasible-nav-dropdown"
                className="navbar-link"
              >
                <NavDropdown.Item href="https://teamjkf.org/the-man-jkf" className="nav-text">
                  THE MAN JKF
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/beyond-politics" className="nav-text">
                  BEYOND POLITICS
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/jkfs-political-evolution" className="nav-text">
                  POLITICAL EVOLUTION
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/ekiti-success-story" className="nav-text">
                  EKITI SUCCESS STORY
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/words-on-marble" className="nav-text">
                  WORDS ON MARBLE
                </NavDropdown.Item>
                <NavDropdown.Item href="https://teamjkf.org/gallery" className="nav-text">
                  GALLERY
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://teamjkf.org/contact" className="navbar-link">
                CONTACT
              </Nav.Link>

              {!user ? (
                <>
                  <Nav.Link as={Link} to="/login" className="navbar-link">
                    LOGIN
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="navbar-link">
                    JOIN US
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/dashboard" className="navbar-link">
                    MY ACCOUNT
                  </Nav.Link>
                  <Nav.Link onClick={logout} className="navbar-link">
                    LOGOUT
                  </Nav.Link>
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
