import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../../ProfileCard/ProfileCard";
import { Footer } from "../index";

const UserProfile = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="title">
          <p>
            <Link to="/dashboard" className="text-decoration-none text-dark">
              Home <i className="fa-solid fa-angle-right"></i>
            </Link>
            <span className="text-danger"> Adegboyega Ajayi</span>
          </p>
        </div>
        <ProfileCard
          name="adminikas"
          imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm"
        />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
