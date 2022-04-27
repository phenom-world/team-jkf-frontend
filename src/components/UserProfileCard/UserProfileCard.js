import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { UserProfile } from "../../pages";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../../Redux/actions/users";
import LoadState from "../../components//Spinner/LoadState";
import { getUserTeams } from "../../Redux/actions/teams";
import "./UserProfileCard.css";

const UserProfileCard = () => {
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.userTeamsReducer);

  useEffect(() => {
    dispatch(getUserTeams());
    dispatch(userDetails());
  }, [dispatch]);

  return isloading ? (
    <LoadState />
  ) : (
    <div>
      <div className="profile__container">
        <UserProfile />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfileCard;
