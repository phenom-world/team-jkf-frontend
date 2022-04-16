import React from "react";
import { Container } from "react-bootstrap";
import TeamNav from "../TeamNav/TeamNav";
import "./TeamProfileCard.css";
import { Link } from "react-router-dom";
import { Footer } from "../pages";

const TeamProfileCard = ({ teamname, name, children }) => {
  return (
    <div>
      <div className="mb-5">
        <div className="title">
          <p>
            <Link to="/dashboard" className="text-decoration-none text-dark">
              Home <i className="fa-solid fa-angle-right"></i>
            </Link>
            <span className="text-danger"> {name}</span>
          </p>
        </div>
        <div className=" profile_container overflow-auto p-3">
          <Container className="justify-content-start d-flex flex-column align-items-start ">
            <TeamNav name={name} teamname={teamname} />
            <div className="bg-light w-100 p-4 d-flex flex-column justify-content-start align-items-start gap-2 border border-grey">
              {children}
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamProfileCard;
