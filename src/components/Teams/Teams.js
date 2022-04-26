import React, { useEffect } from "react";
import TeamCard from "../TeamCard/TeamCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoadState from "../Spinner/LoadState";
import { getTeams } from "../../Redux/actions/teams";

const Teams = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { teams, getteamsloading } = useSelector((state) => state.getTeamsReducer);
  const { id } = userDetail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return getteamsloading ? (
    <div className="section__2">
      <LoadState />
    </div>
  ) : (
    <>
      <div className="section__2">
        <h2>Teams </h2>
        <div className="members__card">
          {teams?.slice(0, 6).map((user) => (
            <TeamCard
              key={user.teamId}
              name={user.teamname}
              currentUserId={id}
              teamId={user.teamId}
              Id={user.tjkfid}
              isTeam={user.isTeam}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
