import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Image, Nav } from "react-bootstrap";
import DashboardStory from "../../DashboardStory/DashboardStory";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { getUser } from "../../../Redux/actions/users";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoadState from "../../Spinner/LoadState";
import { Footer } from "../index.js";
import moment from "moment";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("result"));
  const { isloading, userDetails } = useSelector(
    (state) => state.userDetailsReducer
  );

  //prettier-ignore
  const { firstname, lastname, tjkfid, createdAt, username } = userDetails;
  const [showResults, setShowResults] = React.useState(true);
  const onClick = () => setShowResults((prev) => !prev);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  console.log(moment(createdAt).format("DD/MM/YYYY[T]HH:mm:ss"));

  useEffect(() => {
    if (user) dispatch(getUser());
  }, []);

  return (
    <div>
      {isloading ? (
        <LoadState />
      ) : (
        <>
          <div className="dashboard-container overflow-auto">
            <Container className="justify-content-start">
              <div className="dashboard-resp d-flex py-5 gap-4">
                <div className="db-img-cont">
                  <Image
                    src="https://res.cloudinary.com/valodagreat/image/upload/v1641822940/WhatsApp_Image_2022-01-10_at_2.51.59_PM_kimsyr.jpg"
                    alt="user-dp"
                    width="150"
                    height="150"
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <div className="p-3 dash-desc d-flex flex-column justify-content-center align-items-center align-items-sm-start">
                    <h3>
                      {firstname} {lastname}
                    </h3>
                    <div className="d-flex flex-column justify-content-between align-items-sm-start align-items-center">
                      <span>
                        <b>
                          Hello {firstname} {lastname}
                        </b>
                      </span>
                      <span className="pt-1">You are logged as {username}</span>
                      <span>
                        Unique ID:{" "}
                        <span
                          style={{
                            backgroundColor: "#3F9CC2",
                            padding: "0 5px",
                          }}
                        >
                          {" "}
                          {tjkfid}{" "}
                        </span>
                      </span>
                      <span className="pt-2">
                        Member since{" "}
                        {moment(createdAt).format("MMMM d, YYYY h:mma")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div className="dashboard-tab">
              <Nav>
                <Nav.Item onClick={onClick}>
                  <Nav.Link>
                    <Link
                      to="/dashboard"
                      className="navbar-link"
                      style={{ marginLeft: "auto" }}
                    >
                      <span style={{ fontSize: "1em", color: "#fff" }}>
                        <i className="fa-solid fa-house-chimney"></i>
                      </span>{" "}
                      Dashboard
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    <Link
                      to="/update-profile"
                      className="navbar-link"
                      style={{ marginLeft: "auto" }}
                    >
                      {" "}
                      <span style={{ fontSize: "1em", color: "#fff" }}>
                        <i class="fa-solid fa-user"></i>
                      </span>{" "}
                      Profile Update
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <span style={{ fontSize: "1em", color: "#fff" }}>
                      <span style={{ fontSize: "1em", color: "#fff" }}>
                        <i class="fa-solid fa-download"></i>
                      </span>{" "}
                    </span>{" "}
                    Downloads
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="link-3"
                    href="https://teamjkf.org/contact/"
                  >
                    {" "}
                    <span style={{ fontSize: "1em", color: "#fff" }}>
                      <span style={{ fontSize: "1em", color: "#fff" }}>
                        <i class="fa-solid fa-circle-question"></i>
                      </span>{" "}
                    </span>{" "}
                    Support
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="link-4">
                    <Link
                      to="/community"
                      className="navbar-link"
                      style={{ marginLeft: "auto" }}
                    >
                      {" "}
                      <span style={{ fontSize: "1em", color: "#fff" }}>
                        <i class="fa-solid fa-people-group"></i>
                      </span>{" "}
                      Community
                    </Link>{" "}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="link-5" onClick={logout}>
                    <span style={{ fontSize: "1em", color: "#fff" }}>
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </span>{" "}
                    Logout
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <DashboardStory showResults={showResults} onClick={onClick} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Dashboard;
