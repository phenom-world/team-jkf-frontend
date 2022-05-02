import React from "react";
import CardComp from "../Card/CardComp";

function DashboardStory({ onClick, showResults }) {
  return (
    <div className="mx-5 mt-3">
      <h3>Welcome to Team JKF</h3>
      <p>You can now check for news update.</p>
      <CardComp showResults={showResults} onClick={onClick} />
    </div>
  );
}

export default DashboardStory;
