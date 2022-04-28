import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProfileHeader.css";

const ProfileHeader = ({ name, imageUrl, id }) => {

  return (
    <div>
      <div className=" profile_container overflow-auto ">
        <Container className="justify-content-start d-flex flex-column align-items-start pb-0 profile_container">
          <h3>{name}</h3>
          <div className="header" id="item-header-cover-image">
            <div className="db-img-cont header-avatar ">
              {/* prettier-ignore */}
              <Image
                src={imageUrl}
                alt="Profile Picture"
                fluid
                width="150"
                height="150"
                className="img"
              />
              <div className="header-content ">
                <h2 className="username text-white ">{name}</h2>
                <div className="item-meta">
                  <span className="activity text-secondary ">Active 4 days, 9 hours ago</span>
                </div>
              </div>
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
                <Link to="/community/friends" className="text-decoration-none text-dark">
                  <div>Friends</div>
                </Link>
              </li>
              <li>
                <Link to={`/community/users/${id}/message`} className="text-decoration-none text-dark">
                  <div>Mesage</div>
                </Link>
              </li>
              <li>
                <Link to="/community/teamlists" className="text-decoration-none d-flex flex-row text-dark groupspan ">
                  <div>Group</div>
                  <div className="counter">17</div>
                </Link>
              </li>
            </ul>
          </div>
          <hr />
        </Container>
      </div>
    </div>
  );
};

export default ProfileHeader;
