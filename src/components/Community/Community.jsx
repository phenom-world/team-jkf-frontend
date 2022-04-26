import React from "react";
import "./Community.css";
import MembersCard from "../MembersCard/MembersCard";
import NavSearch from "../NavSearch/NavSearch";
import { useSelector } from "react-redux";

const Community = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { users } = useSelector((state) => state.getUsersReducer);
  const { id } = userDetail;

  return (
    <>
      <div className="section__2">
        <h2>TJKF Community </h2>
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
          {users?.slice(0, 6)?.map((user) => (
            <MembersCard
              key={user.id}
              name={user.username}
              currentUserId={id}
              memberId={user.id}
              Id={user.tjkfid}
              isFriend={user.isFriend}
              isRequest={user.isRequest}
            />
          ))}
        </div>
        <p>Viewing 1 - 6 of 6 active members</p>
      </div>
    </>
  );
};

export default Community;
