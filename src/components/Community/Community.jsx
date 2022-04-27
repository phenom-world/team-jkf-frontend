import React, { useState, useEffect } from "react";
import "./Community.css";
import MembersCard from "../MembersCard/MembersCard";
import NavSearch from "../NavSearch/NavSearch";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUsers, getUsersBySearch } from "../../Redux/actions/users";
import LoadState from "../Spinner/LoadState";
import Paginate from "../Paginate/Paginate";
import { Row } from "react-bootstrap";
import { useSortData } from "../../hooks/UseSortData";

const Community = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { users, getUsersLoading, pages, page } = useSelector((state) => state.getUsersReducer);
  const { items, requestSort } = useSortData(users);
  const [selectOption, setSelectOption] = useState("");

  const navigate = useNavigate();
  const { id } = userDetail;
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const pageNumber = useQuery().get("page") || 1;
  const limit = 6;
  const searchQuery = useQuery().get("search");

  const searchMember = () => {
    if (query.trim()) dispatch(getUsersBySearch(query, navigate));
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectOption(value);
    if (value === "Alphabetical") {
      requestSort("username");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchMember();
  };

  useEffect(() => {
    dispatch(getUsers(pageNumber, limit));
  }, []);

  return getUsersLoading ? (
    <div className="section__2">
      <LoadState />
    </div>
  ) : (
    <>
      <div className="section__2">
        <h2>TJKF Community </h2>
        <div className="active">
          <div>
            Active Members <span>6</span>
          </div>
        </div>
        <div className="subnav">
          <NavSearch
            onChange={(e) => (setQuery(e.target.value), console.log(e.target.value))}
            onKeyPress={handleKeyPress}
            onClick={searchMember}
          />
          <div className="status ">
            <select name="status" id="" onChange={handleChange} value={selectOption}>
              <option value="Last Active">Last Active</option>
              <option value="Newest Registered">Newest Registered</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
        <p>
          Viewing {page} - {pages} of {pages} active members
        </p>
        <div className="members__card">
          {!searchQuery && (
            <>
              {items
                ?.filter((user) => {
                  if (query === "") {
                    return user;
                  } else if (user.username.toLowerCase().includes(query.toLowerCase())) {
                    return user;
                  }
                })
                .map((user) => (
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
              <Paginate pages={pages} page={page} />
            </>
          )}
        </div>
        <p>
          Viewing {page} - {pages} of {pages} active members
        </p>
      </div>
    </>
  );
};

export default Community;
