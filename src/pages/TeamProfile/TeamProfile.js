import React, { useEffect } from "react";
import TeamProfileCard from "../../components/TeamProfileCard/TeamProfileCard";
import { Footer } from "../index";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTeam } from "../../Redux/actions/teams";
import { userDetails } from "../../Redux/actions/users";
import { getPosts } from "../../Redux/actions/posts";
import PostCard from "../../components/GroupCard/PostCard";
import GroupCard from "../../components/GroupCard/GroupCard";
import LoadState from "../../components/Spinner/LoadState";

const TeamProfile = () => {
  const { teamname } = useParams();
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

  useEffect(() => {
    dispatch(userDetails());
    dispatch(getTeam(teamname));
    if (teamId) dispatch(getPosts(teamId));
  }, [dispatch, teamname, teamId]);

  return isloading || teamloading || getPostsLoading ? (
    <LoadState />
  ) : (
    <div>
      <div className="mb-5">
        <TeamProfileCard
          name={teamname ? teamname : "TeamJKF Oyo"}
          username={userDetail?.username}
        >
          <PostCard
            username={userDetail?.username}
            id={userDetail.id}
            teamId={teamId}
            posts={posts}
          />
          <GroupCard />
          <GroupCard />
        </TeamProfileCard>
      </div>
      <Footer />
    </div>
  );
};

export default TeamProfile;
