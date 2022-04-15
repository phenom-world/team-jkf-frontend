import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamProfileCard from "../../TeamProfileCard/TeamProfileCard";
import { Footer } from "../index";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTeam } from "../../../Redux/actions/teams";
import { userDetails } from "../../../Redux/actions/users";
import { getPosts } from "../../../Redux/actions/posts";
import LoadState from "../../Spinner/LoadState";

const TeamProfile = () => {
  const { teamname } = useParams();
  const user = JSON.parse(localStorage.getItem("result"));
  const dispatch = useDispatch();
  const { teamloading, TeamDetails } = useSelector(
    (state) => state.getTeamReducer
  );
  const { isloading, userDetail } = useSelector(
    (state) => state.userDetailsReducer
  );
  const { getPostsLoading, posts } = useSelector(
    (state) => state.getPostsReducer
  );
  const { teamId } = TeamDetails;
  const [currentTeamId, setCurrentTeamId] = useState(teamId);

  useEffect(() => {
    if (user) {
      dispatch(userDetails());
      dispatch(getTeam(teamname));
      setCurrentTeamId(teamId);
      if (teamId) dispatch(getPosts(teamId));
    }
  }, [dispatch, teamname, teamId]);

  return isloading || teamloading || getPostsLoading ? (
    <LoadState />
  ) : (
    <div>
      <div className="mb-5">
        <div className="title">
          <p>
            <Link to="/dashboard" className="text-decoration-none text-dark">
              Home <i className="fa-solid fa-angle-right"></i>
            </Link>
            <span className="text-danger">
              {" "}
              {teamname ? teamname : "TeamJKF Oyo"}{" "}
            </span>
          </p>
        </div>
        <TeamProfileCard
          name={teamname ? teamname : "TeamJKF Oyo"}
          username={userDetail?.username}
          id={userDetail.id}
          posts={posts}
          teamId={currentTeamId}
          imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm"
        />
      </div>
      <Footer />
    </div>
  );
};

export default TeamProfile;
