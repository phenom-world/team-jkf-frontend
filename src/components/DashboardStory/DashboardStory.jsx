import React from "react";
import CardComp from "../Card/CardComp";
import PostCard from "../PostCard/PostCard";

function DashboardStory({ onClick, showResults }) {
  return (
    <div className="mx-5 mt-3 d-flex justify-content-center align-items-center flex-column ">
      <h5 className="mt-3">Welcome to Team JKF Membership Platform, You can now check for news update.</h5>
      <br />
      {/* <p>News and Update blogpost where members can pass comments on post</p> */}
      <CardComp />
    </div>
  );
}

export default DashboardStory;
