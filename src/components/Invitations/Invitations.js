import React from "react";
import MembersCard from "../MembersCard/MembersCard";
import { useSelector } from "react-redux";
import Message from "../Message/Message";

const Invitations = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { friends, error } = useSelector((state) => state.friendsReducer);
  const { id } = userDetail;
  const isRequest = "Request Received";

  return (
    <>
      {" "}
      <div className="section__2">
        <h2>Invitations </h2>
        {error && <Message variant="danger">{error}</Message>}
        <div className="members__card">
          {friends?.map((user) => (
            <MembersCard key={user._id} name={user.username} currentUserId={id} memberId={user.id} Id={user.tjkfid} isRequest={isRequest} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Invitations;
