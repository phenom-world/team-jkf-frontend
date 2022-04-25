import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import { useSelector } from "react-redux";

const Teams = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { teams } = useSelector((state) => state.getTeamsReducer);
  const { id } = userDetail;
  

  return (
    <>
      <div className="section__2">
        <h2>Teams </h2>
        <div className="members__card">
          {teams?.map((user) => (
            <TeamCard key={user.teamId} name={user.teamname} currentUserId={id} teamId={user.teamId} Id={user.tjkfid} isTeam={user.isTeam} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
