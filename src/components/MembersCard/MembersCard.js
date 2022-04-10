import React from "react";
import "./MembersCard.css";
import profile from "../../Images/profile.jpg";

const MembersCard = () => {
  return (
    <div className="member__container">
      <div className="member__details">
        <div className="profile__image">
          <img src={profile} alt="image1" />
          <p>Akinola Akinyemi Emmanuel</p>
        </div>
        <p className="activity">Active 5 days, 4 hours ago</p>
      </div>
      <div>
        <button className="friend__btn"> Add friend </button>
      </div>
    </div>
  );
};

export default MembersCard;
