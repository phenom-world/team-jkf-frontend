import React from "react";
import CardComp from "../Card/CardComp";

function DashboardStory({ onClick, showResults }) {
  return (
    <div className="mx-5 mt-3">
      <h5>Welcome to Team JKF Membership Platform, You can now check for news update.</h5>
      <br />
      <p>News and Update blogpost where members can pass comments on post</p>
      {/* <CardComp showResults={showResults} onClick={onClick} /> */}
    </div>
  );
}

export default DashboardStory;
