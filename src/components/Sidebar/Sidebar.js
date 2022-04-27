import React from "react";
import { Link } from "react-router-dom";
import Team1 from "../../Images/Team1_logo.png";
import Team2 from "../../Images/Team2_logo.png";
import Team from "../../components/Team/Team";
import { useSelector } from "react-redux";
import Paginate from "../../components/Paginate/Paginate";

const Sidebar = () => {
  const { userTeams } = useSelector((state) => state.userTeamsReducer);

  return (
    <>
      <div className="section__1 sidebar">
        <div className="links">
          <p>Links</p>
          <hr />
          <ul>
            <li>
              <Link to="/timeline" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                My Timeline
              </Link>
            </li>
            <li>
              <Link to="/update-profile" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                Update Profile
              </Link>
            </li>
            <li>
              <Link to="/notification" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/messages" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                Messages
              </Link>
            </li>
            <li>
              <Link to="/community/teams" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                Join Groups
              </Link>
            </li>
            <li>
              <Link to="/community/friends" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                Friend Lists
              </Link>
            </li>
            <li>
              <Link to="/community/invitations" className="text-decoration-none text-dark" style={{ marginLeft: "auto" }}>
                Invitations
              </Link>
            </li>
          </ul>
        </div>
        <div className="groups">
          <p>TJKF Groups (States)</p>
          <hr />
          <div className="filter">
            Newest |
            <span>
              <strong> Active </strong>
            </span>
            | Popular | Alphabetical
          </div>
          {userTeams?.slice(0, 4)?.map((team, i) => (
            <Team teamname={team?.teamname} key={i} />
          ))}
        </div>
        <div className="updates">
          <p>Latest Updates</p>
          <hr />
          <div className="widget-error">
            <p>Sorry, there was no activity found. Please try a different filter.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
