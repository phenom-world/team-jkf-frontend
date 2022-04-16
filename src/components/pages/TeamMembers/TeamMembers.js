import React, { useEffect } from "react";
import { useParams } from "react-router";
import TeamProfileCard from "../../TeamProfileCard/TeamProfileCard";
import Avatar from "../../Avatar/Avatar";
import { useSelector } from "react-redux";
import { getTeam } from "../../../Redux/actions/teams";
import { userDetails } from "../../../Redux/actions/users";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../Redux/actions/posts";
import LoadState from "../../Spinner/LoadState";

const TeamMembers = () => {
  const { teamname } = useParams();
  const dispatch = useDispatch();
  const { teamloading, TeamDetails } = useSelector(
    (state) => state.getTeamReducer
  );
  const { teamId, userNames } = TeamDetails;
  const { isloading, userDetail } = useSelector(
    (state) => state.userDetailsReducer
  );

  useEffect(() => {
    dispatch(userDetails());
    dispatch(getTeam(teamname));
    if (teamId) dispatch(getPosts(teamId));
  }, [dispatch, teamname, teamId]);

  return isloading || teamloading ? (
    <LoadState />
  ) : (
    <div>
      <TeamProfileCard
        name={teamname ? teamname : "TeamJKF Oyo"}
        username={userDetail?.username}
        userNames={userNames}
      >
        <ul className="timeline w-100 mt-2">
          {userNames?.map((username, i) => (
            <>
              <li
                className="timeline-item small_size listyle-none mb-3"
                key={i}
              >
                <div className="d-flex align-items-center gap-2 text-wrap ">
                  <Avatar imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm" />
                  <span className="tweet-user">@{username}</span>
                </div>
              </li>
              <div className="separator"></div>
            </>
          ))}
        </ul>
      </TeamProfileCard>
    </div>
  );
};

export default TeamMembers;
