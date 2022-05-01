import React, { useEffect, useState } from "react";
import MembersCard from "../MembersCard/MembersCard";
import NavSearch from "../NavSearch/NavSearch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFriends } from "../../Redux/actions/users";
import LoadState from "../Spinner/LoadState";

const FriendsList = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { friends, getfriendsloading } = useSelector((state) => state.getFriendsReducer);
  const dispatch = useDispatch();
  const { id } = userDetail;
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return getfriendsloading ? (
    <div className="section__2">
      <LoadState />
    </div>
  ) : (
    <>
      <div className="section__2">
        <h2>Friends </h2>
        <div className="active">
          <div>
            Active Members <span>6</span>
          </div>
        </div>
        <div className="subnav">
          <NavSearch onChange={(e) => setQuery(e.target.value)} />
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
          {friends
            ?.filter((user) => {
              if (query === "") {
                return user;
              } else if (user.username.toLowerCase().includes(query.toLowerCase())) {
                return user;
              }
            })
            .map((user) => (
              <MembersCard key={user._id} name={user.username} currentUserId={id} memberId={user._id} Id={user.tjkfid} isFriend />
            ))}
        </div>
        <p>Viewing 1 - 6 of 6 active members</p>
      </div>
    </>
  );
};

export default FriendsList;
