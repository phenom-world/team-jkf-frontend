import React, { useEffect } from "react";
import MembersCard from "../MembersCard/MembersCard";
import { useSelector } from "react-redux";
import Message from "../Message/Message";
import { useDispatch } from "react-redux";
import LoadState from "../Spinner/LoadState";
import { getinvites } from "../../Redux/actions/request";

const Invitations = () => {
  const { friends, error, requestloading } = useSelector((state) => state.friendsReducer);
  const isRequest = "Request Received";
  const dispatch = useDispatch();
  console.log(friends)

  useEffect(() => {
    dispatch(getinvites());
  }, [dispatch]);

  return requestloading ? (
    <div className="section__2">
      <LoadState />
    </div>
  ) : (
    <>
      {" "}
      <div className="section__2">
        <h2>Invitations </h2>
        {error && <Message variant="danger">{error}</Message>}
        <div className="members__card">
          {friends?.map((user) => (
            <MembersCard key={user._id} name={user.username} currentUserId={user.toId} memberId={user.fromId} Id={user.tjkfid} isRequest={isRequest} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Invitations;
