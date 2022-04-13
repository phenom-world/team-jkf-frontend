import React from "react";
import { Container, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Team1 from "../../Images/Team1_logo.png";
import GroupCard from "../GroupCard/GroupCard";
import NavSearch from "../NavSearch/NavSearch";
import "./TeamProfileCard.css";

const TeamProfileCard = ({ name }) => {
  return (
    <div>
      <div className=" profile_container overflow-auto ">
        <Container className="justify-content-start d-flex flex-column align-items-start">
          <h3>{name}</h3>
          <div className="w-100 d-flex justify-content-center align-items-center flex-column gap-3">
            <div className=" w-100 ">
              <Image
                src="https://teamjkf.org/wp-content/uploads/buddypress/groups/2/cover-image/6115bc5bb0193-bp-cover-image.jpg"
                alt="My logo"
                className="cover__image-group"
                width="100%"
                height="auto"
              />
              <div className="d-flex justify-content-between flex-column flex-sm-row">
                <div className="d-flex flex-column flex-sm-row">
                  <div className=" team__image-group">
                    <img
                      src={Team1}
                      alt="My logo"
                      className="team__image-group-img"
                    />
                  </div>
                  <div className="mx-5 mt-3">
                    <div className="d-flex gap-2">
                      <h6 className="group-title fw-bold">Public Group</h6>
                      <p className="group-text small">Active a month ago</p>
                    </div>
                    <div className="d-flex gap-2">
                      <h6 className="group-title fw-bold">Group Type</h6>
                      <p className="group-text small">State</p>
                    </div>
                  </div>
                </div>
                <div className="flex-sm-column  d-flex  px-3 mt-1 mt-sm-3 justify-content-sm-start justify-content-center align-items-center align-items-sm-end  gap-2">
                  <h6 className="group-text-2 text-secondary small">
                    Group Administrators
                  </h6>
                  <Image
                    src="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm"
                    alt="Profile Picture"
                    fluid
                    width="20"
                    height="20"
                    className="rounded-circle"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="group-name-container  w-100 bg-light p-2 mb-5">
            <div className="group-name-box  w-100 bg-white p-3 text-secondary">
              <p className="group-name  m-0">TeamJKF Oyo</p>
            </div>
          </div>
          <div className="nav-tab">
            <ul>
              <li className="click">
                <Link to="/login" className=" text-decoration-none text-dark">
                  <div>Home</div>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-decoration-none text-dark ">
                  <div>Activity</div>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-decoration-none text-dark">
                  <div>Profile</div>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-decoration-none text-dark">
                  <div>Friends</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-decoration-none d-flex flex-row text-dark groupspan "
                >
                  <div>Group</div>
                  <div className="counter">17</div>
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <h3 className="my-4">Group Activities</h3>
          <div className="mb-5 w-100 d-flex justify-content-between align-items-center flex-sm-row flex-column ">
            <NavSearch />
            <div className="status mt-sm-0 mt-3">
              <select name="status" id="">
                <option value="">Everything</option>
                <option value="Last Active">Updates</option>
                <option value="Newest Registered">Group Memberships</option>
                <option value="Alphabetical">Group Updates</option>
              </select>
            </div>
          </div>
          <div className=" bg-light w-100 p-4 d-flex flex-column justify-content-start align-items-start gap-2 border border-grey">
            <GroupCard />
            <GroupCard />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TeamProfileCard;
