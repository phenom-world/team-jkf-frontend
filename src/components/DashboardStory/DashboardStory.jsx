import React from "react";
import CardComp from "../Card/CardComp";

function DashboardStory({ onClick, showResults }) {
  return (
    <div className="mx-5 mt-3">
      <h3>Dashboard</h3>
      <p>
        Welcome to Team JKF Membership platform. Check for valuable content and
        connect socially to meet other members.
      </p>
      <p>
        Kindly Click here to upload your profile picture and update your
        profile.
      </p>
      <CardComp showResults={showResults} onClick={onClick} />
    </div>
  );
}

export default DashboardStory;
