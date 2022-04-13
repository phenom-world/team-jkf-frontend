import React from "react";
import "./MembersCard.css";
import { Link } from "react-router-dom";
import profile from "../../Images/profile.jpg";

const MembersCard = ({ name, friend, Id, imageUrl }) => {
  return (
    <div className="member__container">
      <div className="member__details">
        <div className="profile__image">
          <Link to={"/member" + Id}>
            <img src={profile} alt="image1" />
          </Link>
          <p>{name}</p>
        </div>
        <p className="activity">Active 5 days, 4 hours ago</p>
      </div>
      <div>
        {!friend && <button className="friend__btn"> Add friend </button>}
      </div>
    </div>
  );
};

export default MembersCard;
