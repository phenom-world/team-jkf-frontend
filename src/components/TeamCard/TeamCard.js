import React, { useState } from "react";
import profile from "../../Images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend, acceptInvite, deleteInvite } from "../../Redux/actions/friends";

const TeamCard = ({ name, isFriend, teamId, isrequest, currentUserId, Id, requestsent, isTeam }) => {
  const dispatch = useDispatch();
  const [Message, setMessage] = useState("");

  const sendRequest = async () => {
    await dispatch(addFriend({ fromId: currentUserId, toId: teamId }));
    setMessage("request sent");
  };

  const acceptRequest = async () => {
    await dispatch(acceptInvite({ fromId: teamId, toId: currentUserId }));
    setMessage("friend");
  };
  const declineRequest = async () => {
    await dispatch(deleteInvite({ fromId: teamId, toId: currentUserId }));
    setMessage("add friend");
  };

  const [buttonValue, setButtonValue] = useState("AddFriend");

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
      {requestsent ? (
        <div>
          <button className="friend__btn" disabled>
            {buttonValue}
          </button>
        </div>
      ) : !isTeam ? (
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
