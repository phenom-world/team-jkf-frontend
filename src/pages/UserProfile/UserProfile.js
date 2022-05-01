import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { Footer } from "../index";
import { getUser } from "../../Redux/actions/users";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadState from "../../components/Spinner/LoadState";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userProfileloading, userProfileDetails } = useSelector((state) => state.getUserReducer);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  const { firstname, lastname, username } = userProfileDetails;
  return userProfileloading ? (
    <LoadState />
  ) : (
    <div>
      <div className="mb-1">
        <div className="title">
          <p>
            <Link to="/dashboard" className="text-decoration-none text-dark">
              Home <i className="fa-solid fa-angle-right"></i>
            </Link>
            <span className="text-danger">
              {" "}
              {firstname}
              {lastname}
            </span>
          </p>
        </div>
        <ProfileHeader name={username} id={id} imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm" />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
