import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TeamProfileCard from "../../components/TeamProfileCard/TeamProfileCard";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { getTeam, getTeamMembers } from "../../Redux/actions/teams";
import { userDetails } from "../../Redux/actions/users";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../../Redux/actions/posts";
import LoadState from "../../components/Spinner/LoadState";

const TeamMembers = () => {
  const { teamname } = useParams();
  const dispatch = useDispatch();
  const { teamloading, TeamDetails } = useSelector((state) => state.getTeamReducer);
  const { isloading: getMemberloading, members } = useSelector((state) => state.getTeamMembersReducer);
  const userNames = members?.userNames || [];
  const userIds = members?.userIds || [];
  const { teamId } = TeamDetails;
  const { isloading, userDetail } = useSelector((state) => state.userDetailsReducer);
  const [result, setResult] = useState();

  useEffect(() => {
    dispatch(userDetails());
    dispatch(getTeam(teamname));
    dispatch(getTeamMembers(teamname));
    if (teamId) dispatch(getPosts(teamId));
  }, [dispatch, teamname, teamId]);

  useEffect(() => {
    if (userIds) {
      var user = userIds.reduce(function (result, field, index) {
        result[userNames[index]] = field;
        return result;
      }, {});
      setResult(user);
    }
  }, [userIds]);

  return isloading || teamloading || getMemberloading ? (
    <LoadState />
  ) : (
    <div>
      {result && (
        <TeamProfileCard name={teamname ? teamname : "TeamJKF Oyo"} username={userDetail?.username} userNames={userNames}>
          <ul className="timeline w-100 mt-2">
            {Object.entries(result).map(([key, value], i) => (
              <>
                <li className="timeline-item small_size listyle-none mb-3" key={i}>
                  <div className="d-flex align-items-center gap-2 text-wrap ">
                    <Avatar imageUrl="https://www.gravatar.com/avatar/4184d0175a931e706080351239ac19b0?s=150&r=g&d=mm" />
                    <Link to={`/community/users/${value}`} className="text-decoration-none">
                      <span className="tweet-user">@{key}</span>
                    </Link>
                  </div>
                </li>
                <div className="separator"></div>
              </>
            ))}
          </ul>
        </TeamProfileCard>
      )}
    </div>
  );
};

export default TeamMembers;
