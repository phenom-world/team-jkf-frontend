import React from "react";
import Team1 from "../../Images/Team1_logo.png";
import { useNavigate } from "react-router";

const Team = ({ teamname }) => {
  const navigate = useNavigate();
  const getTeam = (teamname) => {
    navigate(`/community/teams/${teamname}`);
  };

  return (
    <div className="group" onClick={() => getTeam(teamname)}>
      <div className="group__logo">
        <img src={Team1} alt="My logo" />
      </div>
      <div className="group__details">
        <p>{teamname}</p>
        <p>Active 5 days, 4 hours ago</p>
      </div>
    </div>
  );
};

export default Team;
