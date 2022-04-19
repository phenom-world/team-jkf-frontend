import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import { useSelector } from "react-redux";

const Teams = () => {
  const { userDetail } = useSelector((state) => state.userDetailsReducer);
  const { teams } = useSelector((state) => state.getTeamsReducer);
  const { id } = userDetail;
  const isTeam = false;

  return (
    <>
      <div className="section__2">
        <h2>Teams </h2>
        <div className="members__card">
          {teams?.map((user) => (
            <TeamCard
              key={user._id}
              name={user.username ? user.username : user.teamname}
              currentUserId={id}
              memberId={user.id}
              Id={user.tjkfid}
              isTeam={isTeam}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
