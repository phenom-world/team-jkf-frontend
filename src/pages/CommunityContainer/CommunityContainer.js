import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../Redux/actions/users";
import LoadState from "../../components//Spinner/LoadState";
import { getUserTeams } from "../../Redux/actions/teams";

const CommunityContainer = () => {
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.userTeamsReducer);

  useEffect(() => {
    dispatch(getUserTeams());
    dispatch(userDetails());
  }, [dispatch]);

  return isloading  ? (
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
