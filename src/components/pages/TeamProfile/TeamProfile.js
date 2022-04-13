import React from "react";
import { Link } from "react-router-dom";
import TeamProfileCard from "../../TeamProfileCard/TeamProfileCard";
import { Footer } from "../index";

const TeamProfile = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="title">
          <p>
            <Link to="/dashboard" className="text-decoration-none text-dark">
              Home <i className="fa-solid fa-angle-right"></i>
            </Link>
            <span className="text-danger"> TeamJKF Oyo </span>
          </p>
        </div>
        <TeamProfileCard
          name="TeamJKF Oyo"
          imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm"
        />
      </div>
      <Footer />
    </div>
  );
};

export default TeamProfile;
