import React, { useState } from "react";
import "./MembersCard.css";
import profile from "../../Images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend, acceptInvite, deleteInvite } from "../../Redux/actions/friends";

const MembersCard = ({ name, isFriend, memberId, currentUserId, Id, teams, isRequest }) => {
  const dispatch = useDispatch();
  const [Message, setMessage] = useState("");

  const sendRequest = async () => {
    await dispatch(addFriend({ fromId: currentUserId, toId: memberId }));
    setMessage("request sent");
  };

  const acceptRequest = async () => {
    await dispatch(acceptInvite({ fromId: memberId, toId: currentUserId }));
    setMessage("friend");
  };
  const declineRequest = async () => {
    await dispatch(deleteInvite({ fromId: memberId, toId: currentUserId }));
    setMessage("add friend");
  };

  return (
    <div className="member__container">
      <div className="member__details">
        <div className="profile__image">
          <Link to={`/community/users/${memberId}`}>
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
      {Message === "friend" ? null : Message === "request sent" || isRequest == "Request Sent" ? (
        <div>
          <button className="friend__btn" disabled>
            Request Sent
          </button>
        </div>
      ) : Message === "add friend" || (!isFriend && isRequest !== "Request Received") ? (
        <div>
          <button className="friend__btn btn-primary" onClick={sendRequest}>
            Add Friend
          </button>
        </div>
      ) : isRequest === "Request Received" ? (
        <div className="d-flex flex-column align-center justify-center gap-2">
          <button className="friend__btn btn-primary" onClick={acceptRequest}>
            ACCEPT
          </button>
          <button className="friend__btn btn-danger" onClick={declineRequest}>
            DECLINE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MembersCard;
