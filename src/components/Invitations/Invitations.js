import React from "react";
import MembersCard from "../MembersCard/MembersCard";
import { useSelector } from "react-redux";

const Invitations = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { friends } = useSelector((state) => state.friendsReducer);
  const { id } = userDetail;
  const isrequest = true;
  console.log(friends);
  return (
    <>
      <div className="section__2">
        <h2>Invitations </h2>
        <div className="members__card">
          {friends?.map((user) => (
            <MembersCard key={user._id} name={user.username} currentUserId={id} memberId={user.id} Id={user.tjkfid} isrequest={isrequest} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Invitations;
