import React from "react";
import MembersCard from "../MembersCard/MembersCard";
import NavSearch from "../NavSearch/NavSearch";
import { useSelector } from "react-redux";

const FriendsList = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { friends } = useSelector((state) => state.getFriendsReducer);
  const { id } = userDetail;
  const isFriend = true;
  return (
    <>
      <div className="section__2">
        <h2>Friends </h2>
        <div className="active">
          <div>
            Active Members <span>6</span>
          </div>
        </div>
        <div className="subnav">
          <NavSearch />
          <div className="status ">
            <select name="status" id="">
              <option value="Last Active">Last Active</option>
              <option value="Newest Registered">Newest Registered</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
        <p>Viewing 1 - 6 of 6 active members</p>
        <div className="members__card">
          {friends?.map((user) => (
            <MembersCard key={user._id} name={user.username} currentUserId={id} memberId={user.id} Id={user.tjkfid} isFriend />
          ))}
        </div>
        <p>Viewing 1 - 6 of 6 active members</p>
      </div>
    </>
  );
};

export default FriendsList;
