import React from "react";
import "./MembersCard.css";
import profile from "../../Images/profile.jpg";

const MembersCard = ({ name, friend, Id }) => {
  return (
    <div className="member__container">
      <div className="member__details">
        <div className="profile__image">
          <img
            src={profile}
            alt="image1"
            // onClick={() => getUser(id)}
            style={{ cursor: "pointer" }}
          />
          <h6 style={{ textTransform: "uppercase" }} className="mb-0">
            {name}
          </h6>
          <p
            className="small_size -mt-3"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            {Id}
          </p>
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
