import React, { useState } from "react";
import profile from "../../Images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendTeamRequest } from "../../Redux/actions/request";

const TeamCard = ({ name, isTeam, teamId, isRequest, currentUserId, Id }) => {
  const dispatch = useDispatch();
  const [Message, setMessage] = useState("");

  const sendRequest = async () => {
    await dispatch(sendTeamRequest(name));
    setMessage("request sent");
  };

  return (
    <div className="member__container">
      <div className="member__details">
        <div className="profile__image">
          <Link to={`/community/teams/${name}`}>
            <img src={profile} alt="image1" style={{ cursor: "pointer" }} />
          </Link>
          <h6 style={{ textTransform: "uppercase" }} className="mb-0">
            {name}
          </h6>
          <p className="small_size -mt-3" style={{ fontFamily: '"Roboto", sans-serif' }}>
            {Id}
          </p>
        </div>
        <p className="activity">Active 5 days, 4 hours ago</p>
      </div>
      {Message === "friend" ? null : Message === "request sent" || isRequest === "Request Sent" ? (
        <div>
          <button className="friend__btn" disabled>
            Request Sent
          </button>
        </div>
      ) : Message === "add friend" || (!isTeam && isRequest !== "Request Received") ? (
        <div>
          <button className="friend__btn btn-primary" onClick={sendRequest}>
            Join Team
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TeamCard;
