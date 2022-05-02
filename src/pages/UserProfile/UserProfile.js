import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { Footer } from "../index";
import { getUser } from "../../Redux/actions/users";
import { useParams } from "react-router";
import Message from "../../components/Message/Message";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadState from "../../components/Spinner/LoadState";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [id, dispatch]);

  const { userProfileloading, userProfileDetails, error } = useSelector((state) => state.getUserReducer);

  const { firstname, lastname, username } = userProfileDetails;

  return userProfileloading ? (
    <LoadState />
  ) : error ? (
    <Message>{error}</Message>
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
              {firstname} {""}
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
