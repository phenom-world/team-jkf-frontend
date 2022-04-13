import React from "react";
import profile from "../../Images/profile.jpg";
import Team1 from "../../Images/Team1_logo.png";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./GroupCard.css";

const GroupCard = () => {
  return (
    <div className="group-container ">
      <div className="profile__image flex-grow-2">
        <div className="group__logo">
          <img src={profile} alt="My logo" />
        </div>
      </div>
      <div className="group-details d-flex flex-column justify-content-start align-items-start flex-grow-1">
        <p>
          <Link to="/login" className=" text-decoration-none text-dark">
            Israel Daniel
          </Link>{" "}
          <span className="text-secondary">joined the group</span>
          <Link
            to="/login"
            className="profile_image text-decoration-none text-dark"
          >
            <img src={Team1} alt="My logo" className="profile_img" />
            TeamJKF Oyo
          </Link>{" "}
          <span className="text-secondary">a month ago </span>
        </p>
        <div className="bg-light w-100 d-flex justify-content-center align-items-center flex-column gap-3 ">
          <div className="p-3 bg-light w-100 bg-cover">
            <Image
              src="https://teamjkf.org/wp-content/uploads/buddypress/groups/2/cover-image/6115bc5bb0193-bp-cover-image.jpg"
              alt="My logo"
              className="cover__image"
              width="100%"
              height="auto"
            />
            <div className=" profile__image-group">
              <img
                src={Team1}
                alt="My logo"
                className="profile__image-group-img"
              />
            </div>
          </div>
          <h5 className="text-secondary mt-5">TeamJKF Oyo</h5>
          <div className="visit_group w-100 px-3">
            <button
              className="btn btn btn-outline-secondary btn-dark mb-4 text-white"
              type="submit"
            >
              Visit Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
