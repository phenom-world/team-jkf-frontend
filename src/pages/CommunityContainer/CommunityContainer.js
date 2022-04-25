import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../Redux/actions/users";
import LoadState from "../../components//Spinner/LoadState";
import { getUserTeams, getTeams } from "../../Redux/actions/teams";
import { getUsers, getFriends } from "../../Redux/actions/users";
import { getinvites } from "../../Redux/actions/friends";

const CommunityContainer = () => {
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.userTeamsReducer);
  const { getUsersLoading } = useSelector((state) => state.getUsersReducer);

  useEffect(() => {
    dispatch(getUserTeams());
    dispatch(getUsers());
    dispatch(userDetails());
  
  }, [dispatch]);

  return isloading || getUsersLoading ? (
    <LoadState />
  ) : (
    <div>
      <div className="title">
        <Link to="/community" className="text-decoration-none text-dark">
          <p> Community</p>
        </Link>
      </div>
      <div className="community__container">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CommunityContainer;
